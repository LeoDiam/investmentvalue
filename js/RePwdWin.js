
Ext.define('RePwdWindow', {
    extend : 'Ext.window.Window',
    title  : 'Modify Password',
    width  : 325,
    height : 185,
    autoShow : true,
    frame : true,
    padding  : '10 10 10 10',
    layout : 'vbox',
    closeAction : 'close',
    items: [
        { xtype : 'textfield', fieldLabel : 'Old Password', itemId:'old',      labelWidth : 100, width : 300 },
        { xtype : 'textfield', fieldLabel : 'New Password', itemId:'new',      labelWidth : 100, width : 300 },
        { xtype : 'textfield', fieldLabel : 'Confirm' ,     itemId:'confirm' , labelWidth : 100, width : 300 }
    ],
    buttons:[
        { text : 'Save',   iconCls:'icon-save',   handler : RePwdSave },
        { text : 'Cancle', iconCls:'icon-cancel', handler : RePwdCancel }
    ]
});

function RePwdSave( th ){
    var w_window = th.up('window');
    if( w_window.down('#new').getValue() != w_window.down('#confirm').getValue() ){
        Ext.Msg.show({
            title   : 'ERROR!',
            msg     : 'Password Error!',
            icon    : Ext.Msg.ERROR,
            buttons : Ext.Msg.OK
        });
        return;
    }
    Ext.MessageBox.confirm(
        'Question',
        'Sure Modify Password?', 
        function( btn ){
            if (btn == 'yes'){
                Ext.Ajax.request({
                    type : "POST",
                    url  : 'Login/RePwd',
                    params:{
                        old : w_window.down('#old').getValue(),
                        new : w_window.down('#new').getValue()
                    },
                    success : function(res,opt,xhr){
                        if( res.responseText == 'ok' ){
                            Ext.toast({
                                html            : 'successful saved!',
                                closable        : false,
                                slideInDuration : 500,
                                autoCloseDelay  : 1000,
                                align           : 't',
                                cls             : 'x-toast-msg',
                                stickOnClick    : false,
                                maxWidth        : 400,
                                maxHeight       : 350
                            });
                            w_window.close();
                        }else{
                            Ext.Msg.show({
                                title   : 'ERROR!',
                                msg     : 'Old Password Error!',
                                icon    : Ext.Msg.ERROR,
                                buttons : Ext.Msg.OK
                            });
                        }
                    },
                    failure : function(request, status, thrown ){
                        Ext.Msg.alert('Message','failure');
                    }
                });
            }
    });
    
}

function RePwdCancel( th ){
    th.up('window').close();
}
