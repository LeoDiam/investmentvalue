Ext.define('UserStore', {
    extend   : 'Ext.data.Store',
    autoLoad : true,
    model    : 'UserModel',
    proxy    : {
        type: 'ajax',
        url: 'Admin/GetUserList',
        reader: {
            type: 'json'
        }
    }
});
