Ext.onReady(function(){

    var viewport = new Ext.Viewport({
        layout: 'fit',
        border: false,
        autoRender: true,
        items : Ext.create('UserGrid')
    });
});
