const firebaseConfig = {
    apiKey: "AIzaSyABYfSbdM9KSx4RoX2ZY_sOHqHp9wKX_zU",
    authDomain: "contactform-portfolio-ebf05.firebaseapp.com",
    databaseURL: "https://contactform-portfolio-ebf05-default-rtdb.firebaseio.com",
    projectId: "contactform-portfolio-ebf05",
    storageBucket: "contactform-portfolio-ebf05.appspot.com",
    messagingSenderId: "870816199899",
    appId: "1:870816199899:web:1b51fe74ac22e1467548fe"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB= firebase.database().ref('contactForm')
  document.getElementById("contactForm").addEventListener('submit',submitForm);

  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    saveMessages(name,emailid,msgContent);
    document.querySelector(".alert").style.display="block";

    setTimeout(()=>{
        document.querySelector(".alert").style.display="none";
    },3000)
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }; 
  