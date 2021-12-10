Ext.onReady(function(){
    var viewport = new Ext.Viewport({
        layout: 'fit',
        border: false,
        autoRender: true,
        items : {
        	xtype : 'panel',
        	layout : 'border',
        	items  : [
        	    	Ext.create('Form'),
        	    	{
        	    		xtype  : 'container',
        	    		region : 'center',
        	    		layout : 'border',
        	    		items  : [
        	    			Ext.create('Grid'),
        	    			Ext.create('Graph')
        	    		]
        	    	}
        	],
	        tbar : [
	        	'-',
	        	{ text : 'Calculation', iconCls : 'icon-calc', handler : CalculationModal},'-',
	        	'->',
				{ text :'User Info',  iconCls : 'icon-man', menu :[
		            { text:'RePwd',   iconCls : 'icon-refresh',  handler : RePwd },
		            { text:'Log Out', iconCls : 'icon-insert',   handler : LogOut }
		        ]}
	        ]
        }
    });
});

function CalculationModal( th ) {
	var w_Value = th.up('panel').down('#MainForm').down('#Value_end').getValue();
	Ext.create('Ext.window.Window',{
		title : 'Calculation',
		autoShow : true,
		width : 800,
		height : 400,
		layout : 'border',
		items : [
			Ext.create('ModalForm', { Value_end : w_Value }),
			Ext.create('ModalGrid')
		]
	});
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
                        Ext.Msg.alert('Message','failure');
                    }
                });
            }
    });
}
