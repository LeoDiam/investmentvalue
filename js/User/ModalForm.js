var w_store2 = [], w_store3 = [];
for( var w_i = 18 ; w_i < 61 ; w_i ++ ){
    w_store2.push( w_i );
}
for( var w_i = 10 ; w_i < 31 ; w_i ++ ){
    w_store3.push( w_i );
}

Ext.define('ModalForm',{
    extend : 'Ext.form.Panel',
    itemId : 'ModalForm',
    frame: true,
    columnLines: true,
    region:'north',
    height : 90,
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
        width : 200,
        labelWidth: 100,
        value : 0,
        listeners : { change : ModalFieldChange }
    },
    items:[
        { xtype:'combobox',    fieldLabel:'Cover',             itemId: 'Cover',    value : 'TT05', store : ['TT05','TT06'] },
        { xtype:'combobox',    fieldLabel:'Age at Entry',      itemId: 'Age',      value : 50    , store : w_store2 },
        { xtype:'combobox',    fieldLabel:'Sex',               itemId: 'Sex',      value : 'Male', store : ['Male','Female'] },
        { xtype:'combobox',    fieldLabel:'Contract Duration', itemId: 'Duration', value : 15    , store : w_store3},
        { xtype:'numberfield', fieldLabel:'Sum Assured',       itemId: 'Sum',      value : 0,  minValue : 0 },
        { xtype:'numberfield', fieldLabel:'Rate',              itemId: 'Rate',     value : 10, minValue : 0, maxValue : 100 },
    ],
    listeners:{
        afterrender : ModalFormRender
    }
});

function ModalFormRender( th ){
    th.down('#Sum').setValue( th.Value_end );
    th.up().down('#ModalGrid').fireEvent('calculateData');
}

function ModalFieldChange( th ){
    th.up().up().down('#ModalGrid').fireEvent('calculateData')
}