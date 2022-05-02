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

     user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

      function send(){
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
                  
            });
            document.getElementById("msg").value = "";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      Name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+ Name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button +span_with_tag;

      document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();


function updateLike(message_id)
{
      console.log("clicked on the like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(button_id).update({
            like:updated_likes
      });
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}