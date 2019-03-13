var login = document.getElementById("login");
var register = document.getElementById("register");

function setLocal(event) {
    if (event.target.id == "login") {
        localStorage.setItem("userClick", "login");
    } else if (event.target.id == "register") {
        localStorage.setItem("userClick", "register");
    }
}
login.addEventListener("click", setLocal)
register.addEventListener("click", setLocal)