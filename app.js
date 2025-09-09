let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
(function() {
    emailjs.init("ThhD2zf3aB05eVGSG"); 
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_f1ewu5v", "template_djevj24", this)
      .then(function() {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
      });
  });