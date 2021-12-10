
Ext.define('UserGrid',{
    extend : 'Ext.grid.Panel',
    itemId : 'MainGrid',
    frame: true,
    columnLines: true,
    plugins: [ { ptype:'cellediting', pluginId: 'cellplugin', clicksToEdit:1 }, 'gridfilters'],
    region:'center',
    store: Ext.create('UserStore'),
    columns: [
        { text: '№',width : 80, align:'center',xtype:'rownumberer' },
        { text: 'Nickname', sortable : true, align: 'center', flex:1, dataIndex: 'user_nickname'}
    ],
    tbar:['','-',
        { text :'Add',    iconCls : 'icon-add',    handler : Add },'-',
        { text :'Delete', iconCls : 'icon-delete', handler : Delete },'-','->',
        { text :'User Info',  iconCls : 'icon-man', menu :[
            { text:'RePwd',   iconCls : 'icon-refresh',  handler : RePwd },
            { text:'Log Out', iconCls : 'icon-insert',   handler : LogOut }
        ]}
    ]
});

function Add( th ){
    Ext.create('AddUserWindow',{
        store : th.up('panel').getStore()
    });
}

function Delete( th ){
    var w_panel = th.up('panel');
    Ext.MessageBox.confirm('Question', 'Sure Delete?', 
        function( btn ){
            if (btn == 'yes'){
                var w_store = w_panel.getStore();
                var w_rec   = w_panel.getSelectionModel().getLastSelected();
                Ext.Ajax.request({
                    type : "POST",
                    url  : 'Admin/DeleteUser',
                    params:{
                        rec_id : w_rec.get('rec_id')
                    },
                    success : function(res,opt,xhr){
                        Ext.toast({
                            html            : 'Successly Delete!',
                            closable        : false,
                            slideInDuration : 500,
                            autoCloseDelay  : 1000,
                            align           : 't',
                            cls             : 'x-toast-msg',
                            stickOnClick    : false,
                            maxWidth        : 400,
                            maxHeight       : 350
                        });
                        w_store.load();
                    },
                    failure : function(request, status, thrown ){
                        Ext.Msg.alert('Error','fail');
                    }
                });
            }
        }
    );
}

function RePwd(){
    Ext.create('RePwdWindow');
}

function LogOut(){
    Ext.MessageBox.confirm(
        'Question',
        'Sure LogOut?', 
        function( btn ){
            if (btn == 'yes'){
                Ext.Ajax.request({
                    type : "POST",
                    url  : 'Login/LogOut',
                    params:{},
                    success : function(res,opt,xhr){
                        location.href = '/';
                    },
                    failure : function(request, status, thrown ){
                        Ext.Msg.alert('Message','fail');
                    }
                });
            }
    });
}
