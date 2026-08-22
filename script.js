/*
 * BABA ATTA CHAKKI - DYNAMIC STORE
 * Product cards, filters, cart, quantities and address are generated/managed by JavaScript.
 */

const WHATSAPP_NUMBER = "919415626558";

const PRODUCTS = [
    {
        id: "mp-sarbati",
        name: "MP Sarbati Wheat Atta",
        category: "Wheat Atta",
        image: "mp-sarbati.jpg",
        description: "Premium MP Sarbati wheat flour.",
        prices: [
            { label: "250 GM", price: 15 }, { label: "500 GM", price: 28 },
            { label: "1 KG", price: 50 }, { label: "2 KG", price: 98 },
            { label: "5 KG", price: 240 }, { label: "10 KG", price: 470 }
        ]
    },
    {
        id: "wheat-atta",
        name: "Wheat Atta",
        category: "Wheat Atta",
        image: "wheat-atta.jpg",
        description: "Everyday fresh wheat atta.",
        prices: [
            { label: "250 GM", price: 15 }, { label: "500 GM", price: 28 },
            { label: "1 KG", price: 50 }, { label: "2 KG", price: 98 },
            { label: "5 KG", price: 240 }, { label: "10 KG", price: 470 }
        ]
    },
    {
        id: "multigrain",
        name: "Multi Grain Atta",
        category: "Special Atta",
        image: "multigrain-atta.jpg",
        description: "A wholesome multi-grain flour blend.",
        prices: [
            { label: "250 GM", price: 30 }, { label: "500 GM", price: 55 },
            { label: "1 KG", price: 100 }, { label: "2 KG", price: 195 },
            { label: "5 KG", price: 480 }, { label: "10 KG", price: 950 }
        ]
    },
    {
        id: "chana-sattu",
        name: "Chana Sattu",
        category: "Sattu",
        image: "chana-sattu.jpg",
        description: "Roasted chana sattu for traditional drinks and recipes.",
        prices: [
            { label: "250 GM", price: 40 }, { label: "500 GM", price: 80 },
            { label: "1 KG", price: 150 }, { label: "2 KG", price: 295 },
            { label: "5 KG", price: 730 }, { label: "10 KG", price: 1450 }
        ]
    },
    {
        id: "jau-sattu",
        name: "Jau Sattu",
        category: "Sattu",
        image: "jau-sattu.jpg",
        description: "Fresh barley sattu.",
        prices: [
            { label: "250 GM", price: 30 }, { label: "500 GM", price: 60 },
            { label: "1 KG", price: 110 }, { label: "2 KG", price: 215 },
            { label: "5 KG", price: 530 }, { label: "10 KG", price: 1050 }
        ]
    },
    {
        id: "chana-besan",
        name: "Chana Besan",
        category: "Besan",
        image: "chana-besan.jpg",
        description: "Fine chana besan for snacks and cooking.",
        prices: [
            { label: "250 GM", price: 30 }, { label: "500 GM", price: 60 },
            { label: "1 KG", price: 110 }, { label: "2 KG", price: 215 },
            { label: "5 KG", price: 530 }, { label: "10 KG", price: 1050 }
        ]
    },
    {
        id: "makka",
        name: "Makka Atta",
        category: "Millet & Other",
        image: "makka-atta.jpg",
        description: "Fresh corn flour for traditional meals.",
        prices: [
            { label: "250 GM", price: 15 }, { label: "500 GM", price: 28 },
            { label: "1 KG", price: 50 }, { label: "2 KG", price: 98 },
            { label: "5 KG", price: 240 }, { label: "10 KG", price: 470 }
        ]
    },
    {
        id: "bajra",
        name: "Bajra Atta",
        category: "Millet & Other",
        image: "bajra-atta.jpg",
        description: "Fresh bajra flour.",
        prices: [
            { label: "250 GM", price: 15 }, { label: "500 GM", price: 28 },
            { label: "1 KG", price: 50 }, { label: "2 KG", price: 98 },
            { label: "5 KG", price: 240 }, { label: "10 KG", price: 470 }
        ]
    },
    {
        id: "jau-guri",
        name: "Jau/Guri Atta",
        category: "Millet & Other",
        image: "jau-guri-atta.jpg",
        description: "Traditional barley flour.",
        prices: [
            { label: "250 GM", price: 20 }, { label: "500 GM", price: 40 },
            { label: "1 KG", price: 70 }, { label: "2 KG", price: 138 },
            { label: "5 KG", price: 340 }, { label: "10 KG", price: 670 }
        ]
    },
    {
        id: "ragi",
        name: "Madua/Ragi Atta",
        category: "Millet & Other",
        image: "madua-ragi-atta.jpg",
        description: "Fresh ragi flour.",
        prices: [
            { label: "250 GM", price: 30 }, { label: "500 GM", price: 60 },
            { label: "1 KG", price: 100 }, { label: "2 KG", price: 195 },
            { label: "5 KG", price: 480 }, { label: "10 KG", price: 950 }
        ]
    },
    {
        id: "jwar",
        name: "Jwar Atta",
        category: "Millet & Other",
        image: "jwar-atta.jpg",
        description: "Fresh jowar flour.",
        prices: [
            { label: "250 GM", price: 30 }, { label: "500 GM", price: 60 },
            { label: "1 KG", price: 100 }, { label: "2 KG", price: 195 },
            { label: "5 KG", price: 480 }, { label: "10 KG", price: 950 }
        ]
    }
];

let cart = loadJSON("babaAttaCart", []);
let selectedPrices = {};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    buildCategories();
    renderProducts();
    renderCart();
    loadSavedAddress();

    document.getElementById("product-search").addEventListener("input", renderProducts);
    document.getElementById("category-filter").addEventListener("change", renderProducts);
    document.getElementById("sort-products").addEventListener("change", renderProducts);

    document.getElementById("cart-trigger").addEventListener("click", openCart);
    document.getElementById("close-cart").addEventListener("click", closeCart);
    document.getElementById("cart-overlay").addEventListener("click", closeCart);

    document.getElementById("save-address").addEventListener("click", saveAddress);
    document.getElementById("place-order").addEventListener("click", placeOrder);
    document.getElementById("clear-cart").addEventListener("click", clearCart);
    document.getElementById("submit-review").addEventListener("click", submitReview);
    document.getElementById("continue-shopping").addEventListener("click", () => {
        document.getElementById("order-success").hidden = true;
        document.getElementById("products").scrollIntoView({behavior: "smooth"});
    });
    renderReviews();

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeCart();
    });
});

function buildCategories() {
    const select = document.getElementById("category-filter");
    [...new Set(PRODUCTS.map(p => p.category))].sort().forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

function renderProducts() {
    const container = document.getElementById("product-container");
    const query = document.getElementById("product-search").value.trim().toLowerCase();
    const category = document.getElementById("category-filter").value;
    const sort = document.getElementById("sort-products").value;

    let products = PRODUCTS.filter(product => {
        const matchesText =
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query);
        const matchesCategory = category === "all" || product.category === category;
        return matchesText && matchesCategory;
    });

    if (sort === "low") products.sort((a, b) => getStartingPrice(a) - getStartingPrice(b));
    if (sort === "high") products.sort((a, b) => getStartingPrice(b) - getStartingPrice(a));
    if (sort === "name") products.sort((a, b) => a.name.localeCompare(b.name));

    container.innerHTML = products.map(product => createProductCard(product)).join("");
    document.getElementById("no-products").hidden = products.length !== 0;
}

function createProductCard(product) {
    const selected = selectedPrices[product.id] ?? product.prices.find(p => p.label === "1 KG") ?? product.prices[0];

    return `
        <article class="product-card">
            <div class="product-image-wrap">
                <img src="Images/${escapeAttr(product.image)}"
                     alt="${escapeAttr(product.name)}"
                     loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='grid'">
                <div class="image-fallback">🌾</div>
            </div>

            <div class="product-info">
                <span class="category-badge">${escapeHTML(product.category)}</span>
                <h3>${escapeHTML(product.name || product.title || product.productName || "Baba Atta Product")}</h3>
                <p>${escapeHTML(product.description)}</p>

                <label class="sr-only" for="weight-${product.id}">Choose pack size</label>
                <select id="weight-${product.id}" class="weight-select"
                    onchange="selectProductPrice('${product.id}', this.value)">
                    ${product.prices.map(p =>
                        `<option value="${p.label}" ${p.label === selected.label ? "selected" : ""}>
                            ${escapeHTML(p.label)} - ₹${p.price}
                        </option>`
                    ).join("")}
                </select>

                <div class="product-bottom">
                    <strong class="product-price">₹<span id="price-${product.id}">${selected.price}</span></strong>
                    <button class="add-btn" onclick="addProduct('${product.id}')">Add to Cart</button>
                </div>
            </div>
        </article>
    `;
}

function selectProductPrice(productId, label) {
    const product = PRODUCTS.find(p => p.id === productId);
    const price = product.prices.find(p => p.label === label);
    if (!price) return;

    selectedPrices[productId] = price;
    const priceElement = document.getElementById(`price-${productId}`);
    if (priceElement) priceElement.textContent = price.price;
}

function addProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const selected = selectedPrices[productId] ??
        product.prices.find(p => p.label === "1 KG") ??
        product.prices[0];

    const cartKey = `${product.id}__${selected.label}`;
    const existing = cart.find(item => item.key === cartKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            key: cartKey,
            id: product.id,
            name: product.name,
            weight: selected.label,
            price: selected.price,
            qty: 1
        });
    }

    saveCart();
    renderCart();
    showToast(`${product.name} (${selected.label}) added to cart`);
}

function renderCart() {
    const container = document.getElementById("cart-items");
    const empty = document.getElementById("cart-empty");

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const delivery = subtotal >= 500 || subtotal === 0 ? 0 : 30;
    const total = subtotal + delivery;

    document.getElementById("cart-count").textContent = totalQty;
    document.getElementById("cart-subtotal").textContent = subtotal.toLocaleString("en-IN");
    document.getElementById("delivery-charge").textContent = delivery === 0 ? "FREE" : "₹30";
    document.getElementById("cart-total").textContent = total.toLocaleString("en-IN");

    const note = document.getElementById("delivery-note");
    if (note) {
        note.textContent = subtotal >= 500
            ? "🎉 You unlocked FREE Delivery!"
            : subtotal > 0
                ? `Add ₹${(500 - subtotal).toLocaleString("en-IN")} more for FREE Delivery`
                : "₹500 or above → Free Delivery";
    }

    empty.style.display = cart.length ? "none" : "block";

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-top">
                <div>
                    <strong>${escapeHTML(item.name)}</strong>
                    <small>${escapeHTML(item.weight)} × ₹${item.price}</small>
                </div>
                <strong>₹${(item.price * item.qty).toLocaleString("en-IN")}</strong>
            </div>
            <div class="cart-controls">
                <button onclick="changeQty(${index}, -1)" aria-label="Decrease quantity">−</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${index}, 1)" aria-label="Increase quantity">+</button>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        </div>
    `).join("");
}

function changeQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart();
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function clearCart() {
    if (!cart.length) return;
    if (!confirm("Clear all items from your cart?")) return;
    cart = [];
    saveCart();
    renderCart();
    showToast("Cart cleared");
}

function openCart() {
    document.getElementById("cart-section").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
    document.body.classList.add("no-scroll");
    loadSavedAddress();
}

function closeCart() {
    document.getElementById("cart-section").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
    document.body.classList.remove("no-scroll");
}

function saveAddress() {
    const address = getAddress();
    if (!validateAddress(address)) return;

    localStorage.setItem("babaAttaDeliveryAddress", JSON.stringify(address));
    showAddressMessage("✓ Address saved successfully");
}

function loadSavedAddress() {
    const address = loadJSON("babaAttaDeliveryAddress", null);
    if (!address) return;

    setValue("customer-name", address.name);
    setValue("customer-phone", address.phone);
    setValue("customer-house", address.house);
    setValue("customer-area", address.area);
    setValue("customer-city", address.city);
    setValue("customer-pincode", address.pincode);

    showAddressMessage("✓ Saved address loaded");
}

function getAddress() {
    return {
        name: valueOf("customer-name"),
        phone: valueOf("customer-phone"),
        house: valueOf("customer-house"),
        area: valueOf("customer-area"),
        city: valueOf("customer-city"),
        pincode: valueOf("customer-pincode")
    };
}

function validateAddress(address) {
    if (Object.values(address).some(v => !v)) {
        showToast("Please fill all delivery address details");
        return false;
    }

    if (!/^[0-9]{10}$/.test(address.phone)) {
        showToast("Please enter a valid 10-digit mobile number");
        return false;
    }

    if (!/^[0-9]{6}$/.test(address.pincode)) {
        showToast("Please enter a valid 6-digit pincode");
        return false;
    }

    return true;
}

function placeOrder() {
    if (!cart.length) {
        showToast("Your cart is empty");
        return;
    }

    const address = getAddress();
    if (!validateAddress(address)) return;

    localStorage.setItem("babaAttaDeliveryAddress", JSON.stringify(address));

    const orderId = "BA" + Date.now().toString().slice(-8);
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    let message = `Hello, I want to place an order from Baba Atta Chakki.%0A%0A`;
    message += `*Order ID:* ${orderId}%0A%0A`;
    message += `*Products:*%0A`;

    cart.forEach(item => {
        message += `• ${encodeURIComponent(item.name)} (${encodeURIComponent(item.weight)}) × ${item.qty} = ₹${item.price * item.qty}%0A`;
    });

    const delivery = total >= 500 ? 0 : 30;
    const finalTotal = total + delivery;
    message += `%0A*Subtotal: ₹${total}*%0A`;
    message += `*Delivery: ${delivery === 0 ? "FREE" : "₹30"}*%0A`;
    message += `*Grand Total: ₹${finalTotal}*%0A%0A`;
    message += `*Delivery Address:*%0A`;
    message += `Name: ${encodeURIComponent(address.name)}%0A`;
    message += `Mobile: ${encodeURIComponent(address.phone)}%0A`;
    message += `Address: ${encodeURIComponent(address.house + ", " + address.area)}%0A`;
    message += `City: ${encodeURIComponent(address.city)}%0A`;
    message += `Pincode: ${encodeURIComponent(address.pincode)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

    document.getElementById("order-success-text").textContent =
        `Order ${orderId} prepared. Subtotal ₹${total.toLocaleString("en-IN")} + Delivery ${delivery === 0 ? "FREE" : "₹30"} = ₹${finalTotal.toLocaleString("en-IN")}.`;
    document.getElementById("order-success").hidden = false;
    closeCart();
    document.getElementById("order-success").scrollIntoView({behavior: "smooth"});
    showToast(`Order ${orderId} prepared`);
}

function showAddressMessage(text) {
    const el = document.getElementById("address-saved");
    el.textContent = text;
    el.style.display = "block";
    clearTimeout(showAddressMessage.timer);
    showAddressMessage.timer = setTimeout(() => el.style.display = "none", 3000);
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "mini-toast";
    toast.textContent = `✓ ${message}`;
    document.getElementById("toast-container").appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
}

function saveCart() {
    localStorage.setItem("babaAttaCart", JSON.stringify(cart));
}

function loadJSON(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
}

function valueOf(id) {
    return document.getElementById(id).value.trim();
}

function setValue(id, value) {
    document.getElementById(id).value = value || "";
}

function getStartingPrice(product) {
    return product.prices[0]?.price ?? 0;
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[char]));
}

function escapeAttr(value) {
    return escapeHTML(value);
}

/*
 * OPTIONAL: To add a new product, add one object to PRODUCTS.
 * No HTML product-card code is required.
 */

/* =========================    
   CUSTOMER REVIEWS
   ========================= */
const DEFAULT_REVIEWS = [
    {
        name: "Rahul Sharma",
        rating: 5,
        text: "Fresh atta and very good quality. Delivery was also on time."
    },
    {
        name: "Priya Singh",
        rating: 5,
        text: "Sattu was very fresh and tasty. Highly recommended!"
    },
    {
        name: "Amit Kumar",
        rating: 4,
        text: "Good quality atta and reasonable prices. Will order again."
    },
    {
        name: "Neha Verma",
        rating: 5,
        text: "Very fresh chakki atta. The quality is really good."
    },
    {
        name: "Vikas Gupta",
        rating: 5,
        text: "Baba Atta Chakki ka atta bahut fresh aur soft hai. Quality kaafi achhi lagi."
    },
    {
        name: "Anjali Mishra",
        rating: 5,
        text: "Makka atta aur wheat atta dono excellent quality ke hain. Packing bhi achhi thi."
    }
];

function loadReviews() {
    return loadJSON("babaAttaReviews", DEFAULT_REVIEWS);
}

function renderReviews() {
    const container = document.getElementById("reviews-list");
    if (!container) return;
    const reviews = loadReviews();

    container.innerHTML = reviews.map(review => `
        <article class="review-card">
            <div class="review-top">
                <strong>${escapeHTML(review.name)}</strong>
                <span class="stars">${"★".repeat(Number(review.rating))}${"☆".repeat(5-Number(review.rating))}</span>
            </div>
            <p>${escapeHTML(review.text)}</p>
            <small>Customer Review</small>
        </article>
    `).join("");
}

function submitReview() {
    const name = document.getElementById("review-name").value.trim();
    const rating = Number(document.getElementById("review-rating").value);
    const text = document.getElementById("review-text").value.trim();

    if (!name || !text) {
        showToast("Please enter your name and review");
        return;
    }

    const reviews = loadReviews();
    reviews.unshift({name, rating, text});
    localStorage.setItem("babaAttaReviews", JSON.stringify(reviews.slice(0, 12)));

    document.getElementById("review-name").value = "";
    document.getElementById("review-text").value = "";
    renderReviews();
    showToast("Thank you for your review ⭐");
}
