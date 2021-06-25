// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWNsFMi-y60_VRlM_uUYS83G7ChZcn3LY",
  authDomain: "let-s-chat-c1d7a.firebaseapp.com",
  databaseURL: "https://let-s-chat-c1d7a-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c1d7a",
  storageBucket: "let-s-chat-c1d7a.appspot.com",
  messagingSenderId: "632119576273",
  appId: "1:632119576273:web:2331046a8cfe6dab0a27f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var dp = localStorage.getItem("Img");
  console.log(dp);


user_name=localStorage.getItem("Name");
console.log(user_name);
room_name=localStorage.getItem("room_name");
console.log(room_name)

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       names = message_data['name'];
	       message = message_data['message'];
         
         name_with_tag = "<h4> "+ names +"<img class='imgdpicon' src='"+dp+"'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<i onclick='myFunction(this)' class='fa fa-thumbs-up' id='lb'></i>&nbsp;&nbsp;";

row = name_with_tag + message_with_tag +like_button;       
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}


function logout(){
localStorage.removeItem("Name");
localStorage.removeItem("room_name");
localStorage.removeItem("imgbgnew")
localStorage.removeItem("Img")
window.location="index.html";
}

function back(){
  window.location="letschat.html";
}



