// Initialize Firebase
var config = {
apiKey: "AIzaSyDFVq597FXLyOnFqVPFPiJXdwrzfnjze5k",
authDomain: "zjsandbox-d4dc0.firebaseapp.com",
databaseURL: "https://zjsandbox-d4dc0.firebaseio.com",
projectId: "zjsandbox-d4dc0",
storageBucket: "zjsandbox-d4dc0.appspot.com",
messagingSenderId: "668265784196"
};
firebase.initializeApp(config);

var account = document.getElementById("account");
//取得account input
var pwd = document.getElementById("pwd");
//取得pwd input
var registerSmtBtn = document.getElementById("registerSmtBtn");
//取得 register button
registerSmtBtn.addEventListener("click", function(){
//將regiser button 加上 click event    
        console.log("Register a new account:", account.value);
    firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).catch(function(error) {
    
    // Handle Errors here.

    var errorCode = error.code;
    var errorMsg = error.message;
    console.log(errorMsg);
    document.getElementById("register_error").innerText = errorMsg;
});
},false); 