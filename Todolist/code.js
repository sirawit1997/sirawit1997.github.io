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
var currentUser = null ;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      Firebase.collection("todos").get().then(function(querySnapshot) {
        var str = ''
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            str += '<tr>'+
                    '<td>' + doc.data().title + '</td>' +
                    '<td>' + doc.data().artist + '</td>' +
                    '<td>' + doc.data().gene + '</td>' +
                    '<td>' + doc.data().time + '</td>' +
                    '<td><a href="show.html?id='+doc.id+'" class="btn btn-warning">Show</a> &nbsp; <button onclick="onDelete(\''+doc.id+'\')" class="btn btn-danger">Delete</button></td>'+
                    '</tr>';
                    
        });
        document.getElementById('tbody').innerHTML = str;
    });    
      currentUser = user;
      document.getElementById('authen').innerHTML= '<li class="nav-item"><a class="nav-link">'+currentUser.email+'</a></li><li class="nav-item"><a class="nav-link" data-toggle="tooltip" href="Login.html" onclick="onLogout(event)">Logout</a></li>'
    
    } else {
      // No user is signed in.
      console.log("No one Login");
      Firebase.collection("todos").get().then(function(querySnapshot) {
        var str = ''
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            str += '<tr>'+
                    '<td>' + doc.data().title + '</td>' +
                    '<td>' + doc.data().artist + '</td>' +
                    '<td>' + doc.data().gene + '</td>' +
                    '<td>' + doc.data().time + '</td>' +
                    '<td><a href="show.html?id='+doc.id+'" class="btn btn-warning">Show</a></td>'+
                    '</tr>';
                    
        });
        document.getElementById('tbody').innerHTML = str;
        document.getElementById('addbeat').innerHTML= ' '
    });
    
    }
  });
function onDelete(id){
    Firebase.collection("todos").doc(id).delete().then(function() {
        window.location.href = "index.html";
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

function onLogout(e){
    e.preventDefault();
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "index.html";
      }).catch(function(error) {
        // An error happened.
      });
}

function onLogin(e){
    e.preventDefault();

}
