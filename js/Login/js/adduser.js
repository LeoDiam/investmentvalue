
$(document).ready(function(){


	function UserAdd(){
		var w_userID = $("#userid2").val(),
				w_birthday = $("#birthday").val(),
				w_depart_id = $('#departList').val(),
				w_job_id = $('#jobList').val(),
				w_userName = $("#username").val(),
				w_userPWD = $("#password1").val(),
				w_rePWD = $("#password2").val();

   		if( w_userName == ""){ $("#username").focus(); return false; }
   		if( w_birthday == ""){ $("#birthday").focus(); return false; }
   		if( w_depart_id == "")  { $("#departList").focus(); return false; }
		if( w_job_id == "")  { $("#jobList").focus(); return false; }
   		if( w_userID == "")  { $("#userid2").focus(); return false; }
		if( w_userPWD == "") { $("#password1").focus(); return false; }
		if( w_userPWD != w_rePWD){
        	$('#modal1-body').text("Password incorrect.");
        	$('#modal1').modal();
		}

		var w_url ="index.php/Login/RegUser";

		$.post(w_url, {
			userName:w_userName,
			birthday: w_birthday,
			depart_id: w_depart_id,
			job_id: w_job_id,
			userID:w_userID,
			userPWD:w_userPWD
		},  function(data){
      			if(data == 0){
		        	$('#modal1-body').text("successful saved.");
		        	$('#modal1').modal();
      			}else if(data == 1) {
		        	$('#modal1-body').html("you cannot the user.<br/>please input again.");
		        	$('#modal1').modal();
					$("#userid2").focus();
      			}else if(data == 2) {
		        	$('#modal1-body').html("you have already login.<br/>please check your user info.");
		        	$('#modal1').modal();
					$("#userid2").focus();
				}
	        }
	    );
	}

	$("#username").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() != "") $("#birthday").focus();
	});
	$("#birthday").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() != "") $("#departList").focus();
	});
	$("#departList").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() != "") $("#userid2").focus();
	});
	$("#userid2").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() != "") $("#password1").focus();
	});
	$("#password1").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() != "") $("#password2").focus();
	});
	$("#password2").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() != "")  UserAdd();
	});

	$("#register-submit-btn").click(function(){ UserAdd(); });
	$("#register-back-btn").click(function(){
		$('.login-form').show();
		$('.register-form').hide();
	});
});