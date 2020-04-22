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
//get URL
var param = window.location.search;
var urlparam = new URLSearchParams(param);
var id = urlparam.get('id').toString();

Firebase.collection("todos").doc(id).get()
.then(function(doc){
    console.log(doc.id,doc.data());
    document.getElementById('titleid').value = doc.data().title;
    document.getElementById('artistid').value = doc.data().artist;
    //document.getElementById('genecheckbox').value = doc.data().gene;
    document.getElementById('time').value = doc.data().time;
})

function onSubmit(e){
    e.preventDefault();
    var editdata = {
        title : document.getElementById('titleid').value,
        artist : document.getElementById('artistid').value,
        gene : document.getElementById('genecheckbox').value,
        time : document.getElementById('time').value
    }

    Firebase.collection("todos").doc(id).update(editdata)
    .then(function() {
        console.log("Document successfully updated!");
        alert("Document successfully updated!");
        window.location.href = "index.html";
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });


}