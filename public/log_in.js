//登入
var accountL = document.getElementById("accountL");
var pwdL = document.getElementById("pwdL");
var loginSmtBtn = document.getElementById("loginSmtBtn");
loginSmtBtn.addEventListener("click",function(){
	console.log("Log in account: ", accountL.value);
	firebase.auth().signInWithEmailAndPassword(accountL.value, pwdL.value).then(function(){
        console.log("User is login success")
    } ,function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	console.log(errorMessage);
      document.getElementById("login_error").innerText = errorMessage;
  })
},false);

var userLogin;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	userLogin = user;
    console.log(userLogin.providerData[0].email + " User is logined", user)
  } else {
  	userLogin = null;
    console.log("User is not logined yet.");
  }
});

//查看目前登入狀況
var currentUserBtn = document.getElementById("currentUserBtn");
currentUserBtn.addEventListener("click",function(){
    var currentUser = firebase.auth().currentUser;
    console.log("current user: ",currentUser);
    console.log(userLogin);
},false);


//登出
var signoutSmtBtn = document.getElementById("signoutSmtBtn");
signoutSmtBtn.addEventListener("click",function(){
    firebase.auth().signOut().then(function() {
        console.log("User sign out!");
    }, function(error) {
    console.log("User sign out error!");
    })
},false);

//Email驗證
var verifyBtn = document.getElementById("verifyBtn");
verifyBtn.addEventListener("click",function(){
  console.log("verify user", userLogin);  
  userLogin.sendEmailVerification().then(function() {
    console.log("驗證信寄出");
  }, function(error) {
   	console.error("驗證信錯誤");
  });
},false);

//更改密碼
var chgPwd = document.getElementById("chgPwd");
var chgPwdBtn = document.getElementById("chgPwdBtn");
chgPwdBtn.addEventListener("click",function(){
	firebase.auth().sendPasswordResetEmail(chgPwd.value).then(function() {
    // Email sent.
    console.log("更改密碼Email已發送");
    chgPwd.value = "";
  }, function(error) {
    // An error happened.
    console.error("更改密碼",error);
  });
},false);
