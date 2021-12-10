
$(document).ready(function(){
	$.backstretch([
        ROOTPATH_RESOURCE+"js/login/image/10 (1).jpg",
        ROOTPATH_RESOURCE+"js/login/image/10 (2).jpg",
        ROOTPATH_RESOURCE+"js/login/image/10 (3).jpg",
        ROOTPATH_RESOURCE+"js/login/image/10 (4).jpg"
        ], { fade: 1000, duration: 8000 }
    );
    $('#birthday').datepicker({
        rtl:'',
        orientation: "left",
        format: 'yyyy-mm-dd',
        autoclose: true
    });
    $('.content').css('margin-top',(screen.height-500)/2);
});