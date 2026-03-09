document.getElementById("login-btn")
.addEventListener("click", function(){

const username =
document.getElementById("input-username").value;

const password =
document.getElementById("input-password").value;

if(username === "admin" && password === "admin123"){

window.location.href = "main.html";

}

else{

alert("Wrong Credentials");

}

});