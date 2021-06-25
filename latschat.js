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

window.onload=function(){
player1n= localStorage.getItem("Name");
var dp = localStorage.getItem("Img");
console.log(dp);
var image = document.getElementById("imgdpicon");
image.src = dp;
document.getElementById("player1n").innerHTML=player1n;
var imgbgnew=localStorage.getItem("Imgbgnew");
console.log(imgbgnew);
if (imgbgnew=="https://offeo.com/learn/wp-content/uploads/2018/12/Pastel-1024x683.jpg"){
  document.body.style.backgroundImage="url('https://offeo.com/learn/wp-content/uploads/2018/12/Pastel-1024x683.jpg')";
}
else if (imgbgnew=="https://image.freepik.com/free-vector/colourful-dark-wavy-background_23-2148392382.jpg")
{
  document.body.style.backgroundImage="url('https://image.freepik.com/free-vector/colourful-dark-wavy-background_23-2148392382.jpg')";
}
else{
  document.body.style.backgroundImage="url('https://besthqwallpapers.com/Uploads/21-1-2021/153029/thumb2-colorful-abstract-background-4k-geometric-shapes-artwork-circles.jpg')";
}
}

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "letschat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("div").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}


function logout(){
  localStorage.removeItem("Name");
  localStorage.removeItem("room_name");
  localStorage.removeItem("imgbgnew")
  localStorage.removeItem("Img")
  window.location="index.html";
}