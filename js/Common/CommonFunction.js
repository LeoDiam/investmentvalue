
function zeroRenderer(v)    
{
    if( !v || v==0 ) return '';
    return Math.round(v*100)/100;
}

function zeroRenderer_4(v)    
{
    if( !v || v==0 ) return '';
    return Math.round(v*10000)/10000;
}

function decimal3Renderer(v)    
{
    if( !v ) return '';
    return Math.round(v*1000)/1000;
}

function roundFloat(value){
    if(isNaN(value) || value == '') return '';
    else return Ext.util.Format.number(value,'0,000.00');
}

function decimol4Renderer(v){
    v = Math.round(v * 10000)/10000;
    if( v > 0 ) return v;
    return '';
}

function dateRenderer(v,m,re)
{
    var v = dateToStr(v);
    return v;
}


function dateRenderer2(v,m,re)
{
    var v = dateToStr(v).substr(5);
    return v;
}


function strTotal(data1, data2, group){ 
    if( group == 0 ) return '<font color="red">sum</font>'; 
    return '<font color="red">sum</font>'; 
}

function redRenderer(v,m,re) 
{
    if( v == 0 ) return '';
    return '<font color="red">'+Math.round(parseFloat(v)*10000)/10000+'</font>';
}

function summaryRenderer(v)    
{
    if( v == 0 ) return '';
    // return '<font color="red">'+v+'</font>';
    return '<font color="red">'+Math.round(parseFloat(v)*100)/100+'</font>';
}
function summaryRenderer_4(v)    
{
    if( v == 0 ) return '';
    // return '<font color="red">'+v+'</font>';
    return '<font color="red">'+Math.round(parseFloat(v)*10000)/10000+'</font>';
}

function summaryDateRenderer(v)    
{
    if( v ==0 ) return '';
    return '<font color="red">'+dateToStr(v)+'</font>';
}
function createToast(title, msg, from, in_duaration, close_time, minWidth){
  Ext.toast({
    html: "<center><h2>"+title+"</h2>"+msg+"</center>",
    closable: false,
    align: from,
    slideInDuration: in_duaration,
    autoCloseDelay: close_time,
    cls: 'x-toast-msg',
    stickOnClick: false,
    minWidth: minWidth
  });
}