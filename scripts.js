/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(){
	
	var email = document.getElementById("email");
	var message = document.getElementsByClassName("message")[0];
	var submit = document.getElementsByTagName("button")[0];
	
	submit.addEventListener("click", function(e){
		e.preventDefault();
		
		if (email.value == ""){
			message.innerHTML = "Email is required for submission"
		}
        else{
			message.innerHTML = "Thank You For Subscribing! Your email" + email + "has been submitted";
		}
	});
});