
document.getElementById("login-btn").addEventListener("click", function(){
    

//  Enter Username  

const userNameInput = document.getElementById("input-username")
const userName = userNameInput.value;

// Enter a password
const inputPin = document.getElementById("input-password")
const pin = inputPin.value;
// console.log(pin)

// match credentials
if(userName=="admin" && pin=="admin123"){
    alert("Login successfully")
    window.location.assign("/home.html")
}
else{
    alert("invalid")
    return
}
// login clicked 

})

