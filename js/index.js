$.ajax('js/baseDesc.json', {
    method: "GET",
    dataType: "json",
    success: function (desc) {
        var advertHolderGet = document.getElementById("advertisement")
        var adder = 0
        for (description of desc) {
            adder++
            advertHolderGet.innerHTML += `<div class="ads of${adder}">
            <div class="placement">
                <p class="bigOne">${description.title}</p>
                <p class="textField">${description.description}</p>
                <p class="quote">"${description.quote}"</p>
                <p class="quoter">${description.qoter}</p>
            </div>
            `
        }
    },
    error: function () {

    }
});

var slideImages = document.getElementsByClassName("carousellImage");
var mainImage = document.getElementById("carousellMain")
mainImage.innerHTML = `<img src="${slideImages[0].src}" alt="${slideImages[0].alt}"/>`
for (i = 0; i < slideImages.length; i++) {
    slideImages[i].addEventListener("click", showImage);
}

function showImage(event) {
    mainImage.innerHTML = `<img src="${event.target.src}" alt="${event.target.alt}"/> `
}

var images = document.getElementsByClassName("carousellImage")

function showImageZoom() {
    mainImage.innerHTML = ""
    for (i = 0; i < images.length; i++) {
        mainImage.innerHTML += `<img src="${images[i].src}" alt="${images[i].alt}" class="newImages"/>`
    }
}
var slideIndex = 0;
function shuffleImages() {
    var i;
    var x = document.getElementsByClassName("newImages");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(shuffleImages, 2000);
}
var windowWidth = window.matchMedia("(max-width: 1280px)");
function matchWindow() {
    if (windowWidth.matches) {
        showImageZoom();
        shuffleImages();
    }
}
matchWindow();


$(document).ready(function(){
    $('#expand').click(function(){
    if($('#header').height() == 120){
            $('#header').stop().animate({height:"65px"})
            $('#mainUl').stop().fadeIn().css({"display":"none"})
        }else{
            $('#header').stop().animate({height:"120px"})
            $('#mainUl').stop().fadeIn().css({"display":"flex", "margin-bottom":"20px"}).children().css({"border-left":"none", "padding-left":"0px"})
        }
    });
});