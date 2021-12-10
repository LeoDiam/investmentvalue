
$(document).ready(function(){

	/**
	 *
	 * @returns {boolean}
	 * @desc login
     */
   	function Login(){
   		var w_userID = $("#userid").val(),
   			w_userPWD = $("#password").val();
   		if( w_userID == ""){
			$("#userid").focus(); return false;
		}
		if( w_userPWD == ""){
			$("#password").focus(); return false;
		}
		
        $.post('index.php/Login/CheckUser/',{
        	userID: w_userID,
        	userPWD: w_userPWD
        },function( r ){
			if(r == "No User") {
        		$('#modal1-body').text("Please input correctly user NickName and Password.");
        		$('#modal1').modal();
            	$("#logid").focus();
        	}else{
            	location.assign('index.php/' + r);
        	}
        });
	}


	$("#userid").focus(function(){
		$("#userid").val("");
	}).keydown(function(e){
		if(e.keyCode == 13) {
			if($("#userid").val() == ""){
				$("#userid").focus();
				return false;
			} else {
				$("#password").focus();
			}
		}
	});


	$("#password").focus(function(){
		$("#password").val("");
	}).keydown(function(e){
		if(e.keyCode == 13) {
			Login();
		}
	});


	$("#login-submit-btn").click(function(){ Login(); });

});