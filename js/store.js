$(document).ready(function () {
    $(document).ready(function () {
        $('#expand').click(function () {
            if ($('#header').height() == 120) {
                $('#header').stop().animate({ height: "65px" })
                $('#mainUl').stop().fadeIn().css({ "display": "none" })
            } else {
                $('#header').stop().animate({ height: "120px" })
                $('#mainUl').stop().fadeIn().css({ "display": "flex", "margin-bottom": "20px" }).children().css({ "border-left": "none", "padding-left": "0px" })
            }
        });
    });
})
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            for (item of items) {
                itemHolder.innerHTML += `<div class="item">
                <div class="itemName">
                    <p>${item.title}</p>
                </div>
                <div class="itemImage">
                    <a><img src="${item.image}" alt="${item.image}"></a>
                </div>
                <div class="addToCart comparison">
                    <p class="cartItems itemsName">${item.description}</p>
                    <p class="cartItems itemsType">${item.type}</p>
                    <p class="cartItems itemsPrice">${item.price}</p><p class="cartItems">€</p>
                    
                </div>
            </div>`
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
var heroSet = document.getElementById("HeroSet")
var heroItem = document.getElementById("HeroItem")
var treasure = document.getElementById("Treasure")
var type = document.getElementsByClassName("itemsType")
heroSet.addEventListener("click", filterSets)
heroItem.addEventListener("click", filterItems)
treasure.addEventListener("click", filterTreasure)

function filterItems(){
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            itemHolder.innerHTML = " "
            for (item of items) {
                if(item.type == "Hero Item"){
                itemHolder.innerHTML += `<div class="item">
                <div class="itemName">
                    <p>${item.title}</p>
                </div>
                <div class="itemImage">
                    <a><img src="${item.image}" alt="${item.image}"></a>
                </div>
                <div class="addToCart comparison">
                    <p class="cartItems itemsName">${item.description}</p>
                    <p class="cartItems itemsType">${item.type}</p>
                    <p class="cartItems itemsPrice">${item.price}</p><p class="cartItems">€</p>
                    
                </div>
            </div>`
            } 
        }
    },
        error: function (err) {
            console.log(err)
        }
    });
}
function filterSets(){
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            itemHolder.innerHTML = " "
            for (item of items) {
                if(item.type == "Hero Set"){
                itemHolder.innerHTML += `<div class="item">
                <div class="itemName">
                    <p>${item.title}</p>
                </div>
                <div class="itemImage">
                    <a><img src="${item.image}" alt="${item.image}"></a>
                </div>
                <div class="addToCart comparison">
                    <p class="cartItems itemsName">${item.description}</p>
                    <p class="cartItems itemsType">${item.type}</p>
                    <p class="cartItems itemsPrice">${item.price}</p><p class="cartItems">€</p>
                    
                </div>
            </div>`
            } 
        }
    },
        error: function (err) {
            console.log(err)
        }
    });
}

function filterTreasure(){
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            itemHolder.innerHTML = " "
            for (item of items) {
                if(item.type == "Treasure"){
                itemHolder.innerHTML += `<div class="item">
                <div class="itemName">
                    <p>${item.title}</p>
                </div>
                <div class="itemImage">
                    <a><img src="${item.image}" alt="${item.image}"></a>
                </div>
                <div class="addToCart comparison">
                    <p class="cartItems itemsName">${item.description}</p>
                    <p class="cartItems itemsType">${item.type}</p>
                    <p class="cartItems itemsPrice">${item.price}</p><p class="cartItems">€</p>
                    
                </div>
            </div>`
            } 
        }
    },
        error: function (err) {
            console.log(err)
        }
    });
}