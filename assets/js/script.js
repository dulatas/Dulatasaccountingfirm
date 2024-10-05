function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message"),
    }
    emailjs.send("service_i6rxq6m","template_83epla8", parms).then(alert("Email Sent!"))
}