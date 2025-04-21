function sendemail(){
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var message=document.getElementById("message").value;

    var templateParams = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        number: number,
        message: message
      };

      emailjs.send('service_gm2rk1c', 'template_2ughxhd', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })

     
}