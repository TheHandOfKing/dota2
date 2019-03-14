$(document).ready(function(){
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
    $.ajax('js/heroes.json', {
        method: "GET",
        dataType: "json",
        success: function (heroes) {
            //here i write stuff for heropedia
            var getHeroIcons1 = document.getElementsByClassName("heroIcons")[0]
            var getHeroIcons2 = document.getElementsByClassName("heroIcons")[1]
            var getHeroIcons3 = document.getElementsByClassName("heroIcons")[2]
            for (hero of heroes) {
                showHeroInfo(event);
                heroTag.innerHTML += `<option>${hero.name}</option>`
                
                if (hero.class == "Strength") {
                    getHeroIcons1.innerHTML += `<a class="heroIconsBase"> <img src="${hero.image}" alt="${hero.name}" class="heroesImg" data-role="${hero.role}" data-type="${hero.type}">
                <img src=${hero.imageHover} alt="${hero.name}" class="heroImgHover" data-role="${hero.role}" data-type="${hero.type}">`
                } else if (hero.class == "Agility") {
                    getHeroIcons2.innerHTML += `<a class="heroIconsBase"> <img src="${hero.image}" alt="${hero.name}" class="heroesImg" data-role="${hero.role}" data-type="${hero.type}">
                    <img src=${hero.imageHover} alt="${hero.name}" class="heroImgHover" data-role="${hero.role}" data-type="${hero.type}">`
                } else if (hero.class == "Intelligence") {
                    getHeroIcons3.innerHTML += `<a class="heroIconsBase"> <img src="${hero.image}" alt="${hero.name}" class="heroesImg" data-role="${hero.role}" data-type="${hero.type}">
                    <img src=${hero.imageHover} alt="${hero.name}" class="heroImgHover" data-role="${hero.role}" data-type="${hero.type}">`
                }
            }
            //Event listneres for images
            for (i = 0; i < getHeroImg.length; i++) {
                getBigImage[i].addEventListener("click", showHeroInfo)
                getHeroImg[i].addEventListener("mouseover", hideImage)
                getBigImage[i].addEventListener("mouseleave", e => returnImage(e.target))
            }
            roleFilterGet.addEventListener("change", roleFilter)
            attackTypeGet.addEventListener("change", filterAttack)
            heroNameGet.addEventListener("change", filterName)
        },
        error: function (err) {
            console.error(err);
          }})
})
// All the getters and vars
var getPedia = document.getElementById("heropediaMain");
var heroClasses = ["Strength", "Agility", "Intellingence"];
var heroRoles = ["Carry", "Durable", "Support", "Disabler", "Escape", "Nuker", "Jungler", "Initiator", "Pusher"];
var selectTag = document.getElementById("roles");
var heroTag = document.getElementById("heroName");
var getPediaClass = document.getElementsByClassName("heropediaClasses");
var getAttr = document.getElementsByClassName("attributes");
var getHeroDesc = document.getElementById("heroDesc");
//Json placeholders
var getHeroImg = document.getElementsByClassName("heroesImg");
var getBigImage = document.getElementsByClassName("heroImgHover");
var getHeroName = document.getElementById("heroNamePut");
var getHeroRole = document.getElementById("rolesChange");
var getHeroType = document.getElementById("typeAttack");
//Event listeners for filters
var roleFilterGet = document.getElementById("roles")
var attackTypeGet = document.getElementById("attacktype")
var heroNameGet = document.getElementById("heroName")

for (i = 0; i < heroRoles.length; i++) {
    selectTag.innerHTML += `<option>${heroRoles[i]}</option>`;
}
for (i = 0; i < heroClasses.length; i++) {
    getPedia.innerHTML += `<div class="heropediaClasses" id="${heroClasses[i]}"></div>`
}
//Html code generation
for (i = 0; i < getPediaClass.length; i++) {
    var spanAttr = document.createElement("SPAN");
    var heroIcons = document.createElement("DIV");
    heroIcons.className += "heroIcons"
    spanAttr.className += "attributes"
    getPediaClass[i].appendChild(spanAttr)
    getPediaClass[i].appendChild(heroIcons)
}
getAttr[0].innerText = "STRENGTH";
getAttr[0].id = "strTab";
getAttr[1].innerText = "AGILITY";
getAttr[1].id = "agiTab";
getAttr[2].innerText = "INTELLIGENCE";
getAttr[2].id = "intTab";

function roleFilter(){
    let roleFilter = roleFilterGet.options[roleFilterGet.selectedIndex].value
    let heroIconsBase = document.getElementsByClassName("heroesImg")
    var heroAClass = document.getElementsByClassName("heroIconsBase")
    for (let i = 0; i < heroIconsBase.length; i++) {
        heroAClass[i].classList.remove("removedImage")
        heroIconsBase[i].classList.remove("removedImage")
        heroIconsBase[i].addEventListener("click", showHeroInfo);
        heroIconsBase[i].addEventListener("mouseover", hideImage)
        var heroArray = heroIconsBase[i].dataset.role.split(",")
        if (roleFilter == "All") {
            heroAClass[i].classList.remove("removedImage")
            heroIconsBase[i].classList.remove("removedImage")
            heroIconsBase[i].addEventListener("click", showHeroInfo);
            heroIconsBase[i].addEventListener("mouseover", hideImage)
        }else if(heroArray.includes(roleFilter)){ 
                heroAClass[i].classList.remove("removedImage")
                heroIconsBase[i].classList.remove("removedImage");
                heroIconsBase[i].addEventListener("click", showHeroInfo);
                heroIconsBase[i].addEventListener("mouseover", hideImage);
        }
            else{
                heroAClass[i].classList.add("removedImage")
                heroIconsBase[i].classList.add("removedImage");
                heroIconsBase[i].removeEventListener("click", showHeroInfo);
                heroIconsBase[i].removeEventListener("mouseover", hideImage);
            }
        }
    }

function filterName() {
    let nameFilter = $("#heroName option:selected").val();
    let heroIconsBase = document.getElementsByClassName("heroesImg")
    let heroAClass = document.getElementsByClassName("heroIconsBase")
    for (i = 0; i < heroIconsBase.length; i++) {
        heroIconsBase[i].classList.remove("removedImage")
        heroAClass[i].classList.remove("removedImage")
        if (nameFilter === "All") {
            heroAClass[i].classList.remove("removedImage")
            heroIconsBase[i].classList.remove("removedImage")
            heroIconsBase[i].addEventListener("click", showHeroInfo);
            heroIconsBase[i].addEventListener("mouseover", hideImage)
        } else if (nameFilter != heroIconsBase[i].alt) {
            heroAClass[i].classList.add("removedImage")
            heroIconsBase[i].classList.add("removedImage");
            heroIconsBase[i].removeEventListener("click", showHeroInfo);
            heroIconsBase[i].removeEventListener("mouseover", hideImage)
        }
    }
}
function filterAttack() {
    let heroIconsBase = document.getElementsByClassName("heroesImg")
    var attackFilter = attackTypeGet.options[attackTypeGet.selectedIndex].value;
    let heroAClass = document.getElementsByClassName("heroIconsBase")
    for (i = 0; i < heroIconsBase.length; i++) {
        //Makes sure the code is a good boy
        heroAClass[i].classList.remove("removedImage")
        heroIconsBase[i].classList.remove("removedImage")
        heroIconsBase[i].addEventListener("click", showHeroInfo);
        heroIconsBase[i].addEventListener("mouseover", hideImage)
        if (attackFilter === "All") {
            heroIconsBase[i].classList.remove("removedImage")
            heroIconsBase[i].addEventListener("click", showHeroInfo);
            heroIconsBase[i].addEventListener("mouseover", hideImage)
        } else if (attackFilter != heroIconsBase[i].dataset.type) {
            heroAClass[i].classList.add("removedImage")
            heroIconsBase[i].classList.add("removedImage");
            heroIconsBase[i].removeEventListener("click", showHeroInfo);
            heroIconsBase[i].removeEventListener("mouseover", hideImage)
         }
    }
}
function showHeroInfo(event) {
    $.ajax('js/heroes.json', {
        method: "GET",
        dataType: "json",
        success: function (heroes) {
            let heroName = document.getElementById("heroNameP")
            let imageHide = event.target;
            let getHeroDesc = document.getElementById("heroDesc");
            //here i write stuff for heropedia
            for (hero of heroes) {
                if (imageHide.alt == hero.name) {
                    getHeroDesc.innerHTML = `<p class="heroDesc" data-name="${hero.name}">${hero.desc}</p>`
                    document.title = "Heropedia - " + imageHide.alt
                    heroName.innerText = imageHide.alt;
                    $('html, body').animate({ scrollTop: $('#heroDesc').offset().top }, 'slow');
                }
            }
        },
        error: function (err) {
            console.error(err);
          }})
}
function hideImage(event) {
    let hoverImgGet = document.getElementsByClassName("heroImgHover")
    let imageHide = event.target;
    var displayed = document.getElementsByClassName("displayed")
    for (i = 0; i < hoverImgGet.length; i++) {
        if (imageHide.alt == hoverImgGet[i].alt) {
            var thatImage = hoverImgGet[i]
            thatImage.classList += " displayed"
            thatImage.style.display = "block"
            thatImage.style.position = "absolute"
            thatImage.top = "13px"
            getHeroName.innerText = thatImage.alt
            getHeroRole.innerText = thatImage.dataset.role.replace(/,/g, ' - ')
            getHeroType.innerText = thatImage.dataset.type
        }
        else if(displayed.length == 2){
            setTimeout(()=>returnImage(thatImage), 2)
        } 
    }
}
function returnImage(bigImage) {
    let smallImage = document.getElementsByClassName("heroesImg")
    var hoverImg = document.getElementsByClassName("heroImgHover")
    for (i = 0; i < smallImage.length; i++) {
        if (bigImage.alt == smallImage[i].alt) {
            getHeroName.innerText = "Chose Your Hero"
            getHeroRole.innerText = " "
            getHeroType.innerText = " "
        }
        else{
            bigImage.style.display = "none"
        }
        hoverImg[i].style.display = "none";
        hoverImg[i].classList.remove("displayed")
    }
}
