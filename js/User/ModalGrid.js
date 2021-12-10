
Ext.define('ModalGrid',{
    extend : 'Ext.grid.Panel',
    itemId : 'ModalGrid',
    frame: true,
    columnLines: true,
    plugins: [ { ptype:'cellediting', pluginId: 'cellplugin', clicksToEdit:1 }, 'gridfilters'],
    region : 'center',
    store: Ext.create('ModalGridStore'),
    columns: [
        { text: 'Policy Year',    sortable : false, align: 'center', flex:1, dataIndex: 'Year',    renderer : zeroRenderer},
        { text: 'Atteined Age',   sortable : false, align: 'center', flex:2, dataIndex: 'Age', renderer : zeroRenderer},
        { text: 'Annuitya(n-k)',  sortable : false, align: 'center', flex:2, dataIndex: 'Annuitya',     renderer : zeroRenderer},
        { text: 'Sum Assured',    sortable : false, align: 'center', flex:2, dataIndex: 'Sum',   renderer : zeroRenderer},
        { text: 'Premium',        sortable : false, align: 'center', flex:2, dataIndex: 'Premium',   renderer : zeroRenderer},
        { text: 'Policy Fee',     sortable : false, align: 'center', flex:2, dataIndex: 'Fee',   renderer : zeroRenderer},
        { text: 'Annual Premium', sortable : false, align: 'center', flex:2, dataIndex: 'Annual',   renderer : zeroRenderer}
    ],
    listeners : {
        calculateData : calulateModalGridData,
        edit          : calulateModalGridData
    }
});

function calulateModalGridData( ){
    var w_from  = this.up().down('#ModalForm');
    console.log('OK');

    var Cover    = w_from.down('#Cover').getValue();
    var Age      = w_from.down('#Age').getValue();
    var Sex      = w_from.down('#Sex').getValue();
    var Duration = w_from.down('#Duration').getValue();
    var Sum      = w_from.down('#Sum').getValue();
    var Rate     = w_from.down('#Rate').getValue();
    var Rate2    = Math.round(1 / (1 + Rate / 100)*1000000)/1000000;

    var w_store     = this.getStore();
    var w_store_len = w_store.getCount();
    var w_Sum       = Sum;
    var w_Annuitya  = 0;
    // var w_Value     = 0;
    // var w_Total     = 0;
    for( var w_i = 0 ; w_i < Duration ; w_i ++ ){
    //     if( w_i > 0 ){
    //         w_Regular = Math.round(w_Regular * ( 1 + Annual_Update / 100 ));
    //     }
        if( w_i >= w_store_len ){
            w_store.insert( w_store_len, {  Year : w_i + 1 } );
            w_store_len ++;
        }
        w_store.getAt(w_i).set('Age', Age + w_i );
        if( w_i == 0 ){
            w_store.getAt(w_i).set('Fee', 30 );
        }else if( Cover != 'TT05' ){
            w_Sum = Math.round(( 1 + Rate / 100 ) * w_Sum * 100 ) / 100 - Math.round( w_Sum / w_Annuitya * 100 ) / 100;
        }
        w_Annuitya = Math.round((1-Math.round(Math.pow(Rate2, Duration-w_i)*1000000)/1000000)/Rate*100*1000000)/1000000;
        w_store.getAt(w_i).set('Annuitya', w_Annuitya );
        w_store.getAt(w_i).set('Sum', w_Sum );

        w_Premium = Math.round( ( w_Sum * g_basic_help[ Age + w_i - 18 ].gross_premium_rate + 35 / ( 1 - 0.11 * (1 + 0.35))) * 100 ) / 100;
        w_store.getAt(w_i).set('Premium', w_Premium);
        w_store.getAt(w_i).set('Annual', w_Premium + w_store.getAt(w_i).get('Fee') );
    }
    for( w_i = Duration ; w_i < w_store_len ; w_i ++ ){
        w_store.remove( w_store.getAt( w_i ) );
    }
}
