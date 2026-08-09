let cart = [];


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCart();
    showToast();
}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(product, index) {

        total = total + product.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>
                    ${product.name} - ₹${product.price}
                </span>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    document.getElementById("cart-total").innerText = total;
}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* =========================================
   SHOW / HIDE CART
========================================= */

function showCart() {

    const cartBox = document.getElementById("cart-section");

    if (cartBox.style.display === "block") {

        cartBox.style.display = "none";

    } else {

        cartBox.style.display = "block";

        loadSavedAddress();
    }
}


/* =========================================
   SAVE ADDRESS
========================================= */

function saveAddress() {

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const house = document.getElementById("customer-house").value.trim();
    const area = document.getElementById("customer-area").value.trim();
    const city = document.getElementById("customer-city").value.trim();
    const pincode = document.getElementById("customer-pincode").value.trim();


    /* CHECK EMPTY FIELDS */

    if (!name || !phone || !house || !area || !city || !pincode) {

        alert("Please fill all address details.");

        return;
    }


    /* CHECK MOBILE NUMBER */

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;
    }


    /* CHECK PINCODE */

    if (!/^[0-9]{6}$/.test(pincode)) {

        alert("Please enter a valid 6-digit pincode.");

        return;
    }


    /* SAVE ADDRESS */

    const address = {

        name: name,
        phone: phone,
        house: house,
        area: area,
        city: city,
        pincode: pincode

    };


    localStorage.setItem(
        "babaAttaDeliveryAddress",
        JSON.stringify(address)
    );


    /* SHOW SUCCESS */

    const savedMessage = document.getElementById("address-saved");

    savedMessage.innerText = "✓ Address saved successfully";

    savedMessage.style.display = "block";

}


/* =========================================
   LOAD SAVED ADDRESS
========================================= */

function loadSavedAddress() {

    const savedAddress =
        localStorage.getItem("babaAttaDeliveryAddress");


    if (!savedAddress) {
        return;
    }


    try {

        const address = JSON.parse(savedAddress);

        document.getElementById("customer-name").value =
            address.name || "";

        document.getElementById("customer-phone").value =
            address.phone || "";

        document.getElementById("customer-house").value =
            address.house || "";

        document.getElementById("customer-area").value =
            address.area || "";

        document.getElementById("customer-city").value =
            address.city || "";

        document.getElementById("customer-pincode").value =
            address.pincode || "";


        const savedMessage =
            document.getElementById("address-saved");

        savedMessage.innerText = "✓ Saved address loaded";

        savedMessage.style.display = "block";


    } catch (error) {

        console.log("Unable to load saved address.");

    }
}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder() {

    /* CHECK CART */

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    /* GET ADDRESS */

    const name =
        document.getElementById("customer-name").value.trim();

    const phone =
        document.getElementById("customer-phone").value.trim();

    const house =
        document.getElementById("customer-house").value.trim();

    const area =
        document.getElementById("customer-area").value.trim();

    const city =
        document.getElementById("customer-city").value.trim();

    const pincode =
        document.getElementById("customer-pincode").value.trim();


    /* CHECK ADDRESS */

    if (!name || !phone || !house || !area || !city || !pincode) {

        alert("Please enter your delivery address first.");

        return;
    }


    /* CHECK MOBILE */

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;
    }


    /* CHECK PINCODE */

    if (!/^[0-9]{6}$/.test(pincode)) {

        alert("Please enter a valid 6-digit pincode.");

        return;
    }


    /* ORDER MESSAGE */

    let message =
        "Hello, I want to place an order:%0A%0A";


    let total = 0;


    /* PRODUCTS */

    cart.forEach(function(product) {

        message +=
            product.name +
            " - ₹" +
            product.price +
            "%0A";

        total = total + product.price;

    });


    /* TOTAL */

    message +=
        "%0A*Total: ₹" +
        total +
        "*";


    /* CUSTOMER DETAILS */

    message +=
        "%0A%0A*Delivery Address:*" +
        "%0AName: " +
        name +
        "%0AMobile: " +
        phone +
        "%0AAddress: " +
        house +
        ", " +
        area +
        "%0ACity: " +
        city +
        "%0APincode: " +
        pincode;


    /* WHATSAPP NUMBER */

    let whatsappNumber = "919415626558";


    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    window.open(whatsappURL, "_blank");
}


/* =========================================
   CHANGE PRODUCT PRICE
========================================= */

function changePrice(select) {

    const product = select.parentElement;

    const price = product.querySelector(".price");

    price.innerText = select.value;
}


/* =========================================
   ADD PRODUCT
========================================= */

function addProduct(button, name) {

    const product = button.parentElement;

    const price =
        Number(product.querySelector(".price").innerText);


    const weight =
        product.querySelector(".weight").options[
            product.querySelector(".weight").selectedIndex
        ].text;


    addToCart(
        name + " (" + weight + ")",
        price
    );
}


/* =========================================
   CLOSE CART WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function(event) {

    const cartBox =
        document.getElementById("cart-section");

    const cartBtn =
        event.target.closest(
            "button[onclick='showCart()']"
        );


    /* Cart button par click hua */

    if (cartBtn) {
        return;
    }


    /* Cart ke bahar click */

    if (!cartBox.contains(event.target)) {

        cartBox.style.display = "none";

    }

});


/* =========================================
   MINI TOAST
========================================= */

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className = "mini-toast";

    toast.innerHTML =
        `✓ Added to cart`;

    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 1800);
}
