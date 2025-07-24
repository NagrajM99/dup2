
function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subjec").value,
    message : document.getElementById("message").value,
    }
  emailjs.send("service_4r5nz0s", "template_msdkwna",parms).then(alert("Email Sent!!)
}
