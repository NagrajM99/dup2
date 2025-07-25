declare var emailjs: any;

export class index {
  sendMail() {
    // Get form values
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const subjectElement = document.getElementById("subject") as HTMLInputElement;
    const messageElement = document.getElementById("message") as HTMLTextAreaElement;

    if (!nameElement || !emailElement || !subjectElement || !messageElement) {
      alert("Please fill in all required fields.");
      return;
    }

    const parms = {
      name: nameElement.value,
      email: emailElement.value,
      subject: subjectElement.value,
      message: messageElement.value,
    };

    // Validate that all fields are filled
    if (!parms.name || !parms.email || !parms.subject || !parms.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send email using EmailJS
    emailjs.send("service_4r5nz0s", "template_msdkwna", parms)
      .then(() => {
        console.log("Mail sent successfully!");
        alert("Email Sent!!");
        
        // Clear the form after successful send
        nameElement.value = "";
        emailElement.value = "";
        subjectElement.value = "";
        messageElement.value = "";
      })
      .catch((error: any) => {
        console.error("Email failed to send:", error);
        alert("Failed to send email. Please try again.");
      });
  }
}
