Ext.define('UserModel', {
    extend: 'Ext.data.Model',
    fields:[
        {name:'rec_id',        type:'int'},
        {name:'user_nickname', type:'string'}
    ]
});