/* Add your JavaScript to this file */
window.onload = function(){
    var form = document.getElementsByClassName("form")
    var message = document.getElementsByClassName("message")
    // const errors = document.getElementById('errors')
    
    form.addEventListener('submit', function(e){
        const email = document.getElementById("email").value
        // let message =[]
        
        if(email == ""){
            message.innerHTML("Email is required")
        }
        else{
            message.innerHTML= "Thank You For Subscribing! Your email" + email + "has been submitted"
        }
        e.preventDefault()
    })
}