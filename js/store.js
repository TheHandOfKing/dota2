var cartDisplay = document.getElementsByClassName("addToCart")[0];
cartDisplay.addEventListener("mouseenter", displayHover);
var btnDisplay = document.getElementsByClassName("itemDesc")[0]
btnDisplay.addEventListener("mouseleave", displayDetails);
function displayHover(){
    cartDisplay.style.display = "none"
    btnDisplay.style.display = "block"
}

function displayDetails(){
    cartDisplay.style.display = "block"
    btnDisplay.style.display = "none"
}