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
var pwd = document.getElementById("pwd");
var registerSmtBtn = document.getElementById("registerSmtBtn");
registerSmtBtn.addEventListener("click", function(){
        console.log(account.value);
    firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).catch(function(error) {
    // Handle Errors here.

    var errorCode = error.code;
    var errorMsg = error.message;
    console.log(errorMsg);
});
},false); 