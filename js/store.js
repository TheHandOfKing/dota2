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
        let i = 0
        var itemHolder = document.getElementById("storeItemsHolder")
        for (item of items) {
            i++
            itemHolder.innerHTML += `<div class="item">
                <div class="itemName">
                    <p>${item.title}</p>
                </div>
                <div class="itemImage" data-id="${i}">
                    <a><img src="${item.image}" alt="${item.image}"></a>
                </div>
                <div class="addToCart comparison">
                    <p class="cartItems itemsName">${item.description}</p>
                    <p class="cartItems itemsType">${item.type}</p>
                    <p class="cartItems itemsPrice">${item.price}</p><p class="cartItems">€</p>
                    
                </div>
            </div>`
        }
        bindCartEvents();
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

function filterItems() {
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            itemHolder.innerHTML = " "
            for (item of items) {
                if (item.type == "Hero Item") {
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
function filterSets() {
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            itemHolder.innerHTML = " "
            for (item of items) {
                if (item.type == "Hero Set") {
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

function filterTreasure() {
    $.ajax('js/storeItems.json', {
        method: "GET",
        dataType: "json",
        success: function (items) {
            var itemHolder = document.getElementById("storeItemsHolder")
            itemHolder.innerHTML = " "
            for (item of items) {
                if (item.type == "Treasure") {
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
function bindCartEvents() {
    $(".itemImage").click(addToCart);
}

function productsInCart() {
    return JSON.parse(localStorage.getItem("products"));
}

function addToCart() {
    let id = $(this).data("id");

    var products = productsInCart();

    if (products) {
        if (productIsAlreadyInCart()) {
            updateQuantity();
        } else {
            addToLocalStorage()
        }
    } else {
        addFirstItemToLocalStorage();
    }

    alert("Cart successfully updated!");
    function productIsAlreadyInCart() {
        return products.filter(p => p.id == id).length;
    }

    function addToLocalStorage() {
        let products = productsInCart();
        products.push({
            id: id,
            quantity: 1
        });
        localStorage.setItem("products", JSON.stringify(products));
    }

    function addFirstItemToLocalStorage() {
        let products = [];
        products[0] = {
            id: id,
            quantity: 1
        };
        localStorage.setItem("products", JSON.stringify(products));
    }
    function updateQuantity() {
        let products = productsInCart();
        for(let i in products)
        {
            if(products[i].id == id) {
                products[i].quantity++;
                break;
            }      
        }
    
        localStorage.setItem("products", JSON.stringify(products));
    }
    
}


function clearCart() {
    localStorage.removeItem("products");
}