// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBWVXOZsxufrkX9DWtNJiT5LWmqEyCKQBM",
      authDomain: "kwitter-a5ad3.firebaseapp.com",
      databaseURL: "https://kwitter-a5ad3-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5ad3",
      storageBucket: "kwitter-a5ad3.appspot.com",
      messagingSenderId: "842897022046",
      appId: "1:842897022046:web:f98a7e86bf26c55a44e8cf"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(Name)
{
      console.log(Name);
      localStorage.setItem("room_name",Name);
      window.location = "kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}