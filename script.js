let cart = [];

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCart();

    alert(productName + " added to cart!");
}

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(product, index) {

        total = total + product.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${product.name} - ₹${product.price}</span>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("cart-total").innerText = total;
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function showCart() {

    document.getElementById("cart-section").scrollIntoView({
        behavior: "smooth"
    });
}

function placeOrder()  {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello, I want to place an order:%0A%0A";

    let total = 0;

    cart.forEach(function(product) {

        message += product.name + " - ₹" + product.price + "%0A";

        total = total + product.price;
    });

    message += "%0ATotal: ₹" + total;

    let whatsappNumber = "919415626558";

    let whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
}

function changePrice(select) {
    const product = select.parentElement;
    const price = product.querySelector(".price");
    price.innerText = select.value;
}

function addProduct(button, name) {
    const product = button.parentElement;

    const price = Number(product.querySelector(".price").innerText);

    const weight = product.querySelector(".weight").options[
        product.querySelector(".weight").selectedIndex
    ].text;

    addToCart(name + " (" + weight + ")", price);
}
