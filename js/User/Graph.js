
Ext.define('Graph',{
    extend : 'Ext.form.Panel',
    title  : 'Graph',
    itemId : 'MainGraph',
    frame  : false,
    layout : 'fit',
    region : 'east',
    width  : 800,
    items  : {
        xtype   : 'box', 
        el : 'MainGraph_Div'
    }
});

$('#MainGraph_Div').highcharts({
        chart:{
            width : 800
        },
        credits:{
            enabled : false
        },
        title : {
            text : ''
        },
        xAxis:{
            title: {
                text: 'Year'
            },
            label:{
                step : 1
            }
        },
        yAxis: {
            title: {
                text: 'Amount'
            },
            type : 'logarithmic',
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 0
        },
        series: []
});


