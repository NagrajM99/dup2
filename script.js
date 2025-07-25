
// Import or create instance of the index class
// Note: If using modules, you'd import this. For now, we'll assume the compiled JS is available.

function sendMail(){
  // This function will be called by the button click
  // If you have the compiled TypeScript available, you can use:
  // const indexInstance = new index();
  // indexInstance.sendMail();
  
  // For now, keeping the original EmailJS implementation
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
    }

  // Validate that all fields are filled
  if (!parms.name || !parms.email || !parms.subject || !parms.message) {
    alert("Please fill in all required fields.");
    return;
  }
    
  emailjs.send("service_4r5nz0s", "template_msdkwna",parms).then(() => {
    alert("Email Sent!!");
    console.log("Mail sent successfully!");
    
    // Clear the form after successful send
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }).catch((error) => {
    console.error("Email failed to send:", error);
    alert("Failed to send email. Please try again.");
  });
}
