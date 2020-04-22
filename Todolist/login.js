var firebaseConfig = {
    apiKey: "AIzaSyDxd3pNt3jc_TkiLIEiijNVjYZbmwk51kQ",
    authDomain: "todolist-16533.firebaseapp.com",
    databaseURL: "https://todolist-16533.firebaseio.com",
    projectId: "todolist-16533",
    storageBucket: "todolist-16533.appspot.com",
    messagingSenderId: "651993545337",
    appId: "1:651993545337:web:231c216681ad0e40cbb2a8",
    measurementId: "G-74ZX47DVZ9"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var Firebase = firebase.firestore();

  function onLogin(e){
      e.preventDefault();
      var email = document.getElementById('usr').value;
      var password = document.getElementById('pwd').value
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(){window.location.href = "index.html"}).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }