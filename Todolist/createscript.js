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
var store = firebase.storage();

function onSubmit(e){
    e.preventDefault();
    var file = document.getElementById('file').files[0]
    let sound = document.getElementById('beat').files[0];
    console.log(file.name);
    var uploadTask = store.ref('images/'+ file.name).put(file);
    let image = "";
    let beat =""
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
    }, function(error) {
            console.log(error)
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
        }, function() {
    // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            image = downloadURL.toString();
            var uploadTask = store.ref('beat/'+ sound.name).put(sound);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
            
            }, function(error) {
                    console.log(error)
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
                }, function() {
            // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(soundURL) {
                    beat = soundURL.toString();
                    var data = {
                        image: image,
                        beat: beat,
                        title : document.getElementById('titleid').value,
                        artist : document.getElementById('artistid').value,
                        gene : document.getElementById('genecheckbox').value,
                        time : document.getElementById('time').value
                    }
                    console.log(data)
                    Firebase.collection("todos").add(data)
                    .then(function(docRef) {
                       alert("Add Sucess");
                       window.location.href = "index.html";
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
                });
    });
        });
    });
}
