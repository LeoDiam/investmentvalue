Ext.define('GridStore', {
    extend   : 'Ext.data.Store',
    autoLoad : true,
    fields   : [
        { name : 'Year',    type : 'int' },
        { name : 'Regular', type : 'int' },
        { name : 'Top',     type : 'int' },
        { name : 'Value',   type : 'int' }
    ]
});

Ext.define('ModalGridStore', {
    extend   : 'Ext.data.Store',
    autoLoad : true,
    fields   : [
        { name : 'Year',     type : 'int' },
        { name : 'Age',      type : 'int' },
        { name : 'Annuitya', type : 'float' },
        { name : 'Sum',      type : 'float' },
        { name : 'Premium',  type : 'float' },
        { name : 'Fee',      type : 'float' },
        { name : 'Annual',   type : 'float' }
    ]
});

Ext.define('GraphStore', {
    extend   : 'Ext.data.Store',
    autoLoad : true,
    fields   : [
        { name : 'Value1', type : 'int' },
        { name : 'Value2', type : 'int' },
        { name : 'Value3', type : 'int' },
        { name : 'Year',   type : 'int' }
    ]
});
