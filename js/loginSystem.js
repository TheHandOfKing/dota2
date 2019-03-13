var signWindow = document.getElementById("signIn")
var input = document.createElement("INPUT")
input.type = "text";
input.name = "username"
input.placeholder = "Enter your username"
var inputPw = document.createElement("INPUT")
inputPw.type = "password"
var submitBtn = document.createElement("BUTTON")
submitBtn.type = "button"
submitBtn.id = "submit"
submitBtn.innerText = "Submit"
var eMail = document.createElement("INPUT")
eMail.type = "e-mail"
var pwConfirm = document.createElement("INPUT")
pwConfirm.type = "password"
var unameCheck = document.createElement("SMALL")
var eMailCheck = document.createElement("SMALL")
var pwCheck = document.createElement("SMALL")
var pwCompare = document.createElement("SMALL")
var storage = localStorage.getItem("userClick")
var allInput = document.getElementsByTagName("INPUT");
var allSmalls = document.getElementsByTagName("SMALL")
if (storage == "login") {
    signWindow.appendChild(input)
    input.id = "signUsername"
    signWindow.appendChild(inputPw)
    inputPw.id = "signPassword"
    inputPw.name = "password"
    inputPw.placeholder = "Enter your password"
    signWindow.appendChild(submitBtn)
}
else if (storage == "register") {
    signWindow.appendChild(input)
    signWindow.appendChild(unameCheck)
    input.id = "registerUsername"
    signWindow.appendChild(eMail)
    signWindow.appendChild(eMailCheck)
    eMail.placeholder = "Enter your E-mail"
    eMail.id = "registerEmail"
    signWindow.appendChild(inputPw)
    signWindow.appendChild(pwCheck)
    inputPw.id = "registerPassword"
    inputPw.name = "password"
    inputPw.placeholder = "Enter your password"
    signWindow.appendChild(pwConfirm)
    signWindow.appendChild(pwCompare)
    pwConfirm.id = "passwordConfirm"
    pwConfirm.name = "passwordConfirm"
    pwConfirm.placeholder = "Confirm your password"
    signWindow.appendChild(submitBtn)
    pwCompare.id = "paraConfPass"
    pwCompare.innerText = "Your passwords do not match"
    eMailCheck.innerText = "E-mail of incorrect format"
    eMailCheck.id = "paraEmail"
    unameCheck.id = "paraUsName"
    unameCheck.innerText = "Username of incorrect format"
    pwCheck.id = "paraPass"
    pwCheck.innerText= "Password must have at least 8 characters, one letter and a number"
}
for(i=0; i< allInput.length; i++){
    allInput[i].classList = "inputs"
}
for(i=0; i< allSmalls.length; i++){
    allSmalls[i].classList = "hidden"
}

$(document).ready(function(){
    var regeExEmail =/^\w+([\.-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    var usernameRegex = /^([a-zA-Z]{3,16})$/
    //Minimum eight characters, at least one letter and one number:
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    $('#registerUsername').on('keypress keydown keyup',function(){
        if (!$(this).val().match(usernameRegex)) {
            $('#paraUsName').removeClass('hidden');
            $('#paraUsName').show();
        }
      else{
           $('#paraUsName').addClass('hidden');
          }
    });
    $('#registerPassword').on('keypress keydown keyup',function(){
        if (!$(this).val().match(passwordRegex)) {
            $('#paraPass').removeClass('hidden');
            $('#paraPass').show();
        }
      else{
           $('#paraPass').addClass('hidden');
          }
    });
    $('#registerEmail').on('keypress keydown keyup',function(){
        if (!$(this).val().match(regeExEmail)) {
            $('#paraEmail').removeClass('hidden');
            $('#paraEmail').show();
        }
      else{
           $('#paraEmail').addClass('hidden');
          }
    });
    $('#passwordConfirm').on('keypress keydown keyup', function(){
        if($('#registerPassword').val() == $('#passwordConfirm').val()){

            $('#paraConfPass').addClass('hidden');
        }else{
            $('#paraConfPass').removeClass('hidden');
            $('#paraConfPass').show();
        }
    });
})