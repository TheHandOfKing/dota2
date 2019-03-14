$(document).ready(function () {
    let products = productsInCart();
    
    if(!products.length)
        showEmptyCart();
    else
        displayCartData();

});

function displayCartData() {
    let products = productsInCart();
    $.ajax({
        url : "js/storeItems.json",
        success : function(data) {
            data = data.filter(p => {
                for(let prod of products)
                {
                    if(p.id == prod.id) {
                        p.quantity = prod.quantity;
                        return true;
                    }
                        
                }
                return false;
            });
            generateRows(data)
        }
    });
}

function generateRows(products) {
    let html = `
    <span class="cart itemCart">ITEM</span>
    <span class="cart cost">PRICE</span>
    <span class="cart quantity">QUANTITY</span>`;
                
    for(let p of products) {
        html += generateOneRow(p);
    }
    $(".descRow").html(html);

    function generateOneRow(p) {
       return  `<div class="oneRow">
       <div class="cartItemPart image-cart">
    <img src="${p.image}" alt="${p.image}">
    <span class="itemName">${p.title}</span>
    </div>
        <span class="cartItemPart price-cart">${p.price * p.quantity}</span>
<div class="cartItemPart quantity-cart">
<span class="quantityCart">${p.quantity}</span>
   <button class="buttonRemove" onclick='removeFromCart(${p.id})'>Remove</button>
</div>
</div>`
    }
}

function showEmptyCart() {
    $("#cartItems").html("<h1>Your cart is empty!</h1>")
}

function productsInCart() {
    return JSON.parse(localStorage.getItem("products"));
}

function removeFromCart(id) {
    let products = productsInCart();
    let filtered = products.filter(p => p.id != id);

    localStorage.setItem("products", JSON.stringify(filtered));

    displayCartData();

}

