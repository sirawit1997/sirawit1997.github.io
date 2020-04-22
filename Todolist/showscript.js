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
    var songinfo = 'artist : ' + doc.data().artist + '<br>'+
                'gene : ' + doc.data().gene + '<br>' + 
                'time : ' + doc.data().time ;
    document.getElementById('img').src =  doc.data().image ;
    document.getElementById('beat').src =  doc.data().beat ;
    document.getElementById('title').innerHTML = doc.data().title;
    document.getElementById('content').innerHTML = songinfo ; 
    document.getElementById('edit').innerHTML = '<a href="edit.html?id='+doc.id+'" class="btn btn-danger">Edit</a>'
})