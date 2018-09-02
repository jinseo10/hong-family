firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {+
  var email = document.getElementById("inputEmailR")
  var pass = document.getElementById("inputPasswordR")
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
