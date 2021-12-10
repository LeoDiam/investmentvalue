
Ext.define('Form',{
    extend : 'Ext.form.Panel',
    itemId : 'MainForm',
    frame: true,
    columnLines: true,
    region:'north',
    height : 110,
    layout: {
        type: 'table', columns: 3,
        tableAttrs: {
            style: { width: '100%'/*, height: '80%'*/}
        },
        trAttrs: {
            style: {widht: '55px', height: '35px',margin:'30px'/*, height: '80%'*/}
        }
    },
    defaults: {
        msgTarget: 'under',
        width : 300,
        labelWidth: 200,
        value : 0,
        listeners : { change : fieldChange }
    },
    items:[
        { xtype:'numberfield', fieldLabel:'Annual amount',           itemId: 'Annual_amount', value : 1200, minValue : 0 },
        { xtype:'numberfield', fieldLabel:'Ιnterest rate(%)',        itemId: 'I_rate',        value : 3,    minValue : 0,  maxValue : 100 },
        { xtype:'numberfield', fieldLabel:'Duration(years)',         itemId: 'Duration',      value : 15,   minValue : 0,  maxValue : 40 },
        { xtype:'numberfield', fieldLabel:'Annual Update(%)',        itemId: 'Annual_Update', value : 2,    minValue : 0,  maxValue : 100 },
        { xtype:'numberfield', fieldLabel:'Age at the end',          itemId: 'Age_end',       value : 65,   minValue : 50, maxValue : 100 },
        { xtype:'numberfield', fieldLabel:'Desired Pension Monthly', itemId: 'Desired',       value : 1000, minValue : 0 },
        { xtype:'numberfield', fieldLabel:'Total',                   itemId: 'Total',         minValue : 0, readOnly : true },
        { xtype:'numberfield', fieldLabel:'Value at the end',        itemId: 'Value_end',     minValue : 0, readOnly : true },
        { xtype:'numberfield', fieldLabel:'Pension for Age',         itemId: 'Pension_age',   minValue : 0, readOnly : true },
    ],
    listeners : {
        afterrender : function( th ){
            th.up().down('#MainGrid').fireEvent('calculateData');
        }
    }
});

function fieldChange( th ){
    th.up('panel').up().down('#MainGrid').fireEvent('calculateData');
}
