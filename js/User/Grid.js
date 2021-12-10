
Ext.define('Grid',{
    extend : 'Ext.grid.Panel',
    itemId : 'MainGrid',
    frame: true,
    columnLines: true,
    plugins: [ { ptype:'cellediting', pluginId: 'cellplugin', clicksToEdit:1 }, 'gridfilters'],
    region : 'center',
    store: Ext.create('GridStore'),
    columns: [
        { text: 'Year',             sortable : false, align: 'center', flex:1, dataIndex: 'Year',    renderer : zeroRenderer},
        { text: 'Regular Premium',  sortable : false, align: 'center', flex:2, dataIndex: 'Regular', renderer : zeroRenderer},
        { text: 'Top Up',           sortable : false, align: 'center', flex:2, dataIndex: 'Top',     renderer : zeroRenderer, editor:{xtype:'numberfield', minValue:0}},
        { text: 'Value of account', sortable : false, align: 'center', flex:2, dataIndex: 'Value',   renderer : zeroRenderer}
    ],
    listeners : {
        calculateData : calulateGridData,
        edit          : calulateGridData
    }
});

function calulateGridData( ){
    var w_from  = this.up().up().down('#MainForm');

    var w_graph_data = [[],[],[]];

    var Annual_amount = w_from.down('#Annual_amount').getValue();
    var I_rate        = w_from.down('#I_rate').getValue();
    var Duration      = w_from.down('#Duration').getValue();
    var Annual_Update = w_from.down('#Annual_Update').getValue();
    var Age_end       = w_from.down('#Age_end').getValue();
    var Desired       = w_from.down('#Desired').getValue();

    var w_store     = this.getStore();
    var w_store_len = w_store.getCount();
    var w_Regular   = Annual_amount;
    var w_Value     = 0;
    var w_Total     = 0;
    for( var w_i = 0 ; w_i < Duration ; w_i ++ ){
        if( w_i > 0 ){
            w_Regular = Math.round(w_Regular * ( 1 + Annual_Update / 100 ));
        }
        if( w_i >= w_store_len ){
            w_store.insert( w_store_len, {  Year : w_i + 1 } );
            w_store_len ++;
        }
        if( w_i == 0 ){
            w_Value = Math.round((w_Regular + w_store.getAt( w_i ).get('Top')) * 0.5 * (1 + I_rate / 100));
        }else if( w_i == 1 ){
            w_Value = Math.round(( w_Value + w_Regular * 0.75 + w_store.getAt( w_i ).get('Top')) * (1 + I_rate / 100));
        }else{
            w_Value = Math.round(( w_Value + w_Regular + w_store.getAt( w_i ).get('Top')) * (1 + I_rate / 100));
        }
        w_store.getAt( w_i ).set('Regular', w_Regular);
        w_store.getAt( w_i ).set('Value',   w_Value);
        w_Total += w_Regular + w_store.getAt( w_i ).get('Top');

        w_graph_data[0].push( [w_i + 1, w_Regular] );
        w_graph_data[1].push( [w_i + 1, w_Value] );
        
    }
    for( w_i = Duration ; w_i < w_store_len ; w_i ++ ){
        w_store.remove( w_store.getAt( w_i ) );
    }

    w_from.down('#Total'    ).setValue( w_Total );
    w_from.down('#Value_end').setValue( w_Value );

    var w_Pension_age = Math.round(Desired * 1000 / g_basic_rate[Age_end - 50].lifelong);
    w_from.down('#Pension_age').setValue( w_Pension_age );

    for( var w_i = 0 ; w_i < Duration ; w_i ++ ){
        w_graph_data[2].push( [w_i+1, w_Value] );
    }
    // w_graph.redraw();
    var w_chart = $('#MainGraph_Div').highcharts();
    var w_series = w_chart.series;
    var w_len = w_series.length;
    while( w_len -- ){
        w_chart.series[0].remove();
    }
    w_chart.addSeries({ name:'Premium', data : w_graph_data[0]});
    w_chart.addSeries({ name:'Value of Account', data : w_graph_data[1]});
    w_chart.addSeries({ name:'Maximum', data : w_graph_data[2]});
}
