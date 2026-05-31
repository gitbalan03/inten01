const cartContainer = document.getElementById('cart-container');
const subtotalDisplay = document.getElementById('cart-subtotal');
const discountDisplay = document.getElementById('cart-discount');
const totalDisplay = document.getElementById('cart-total');

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Display
function updateCartDisplay() {
    cartContainer.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        subtotalDisplay.textContent = "0";
        discountDisplay.textContent = "0";
        totalDisplay.textContent = "0";
        return;
    }

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item fade-in";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: 
                  <button onclick="changeQuantity(${item.id}, -1)">-</button> 
                  ${item.quantity} 
                  <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Apply discount (10%)
    const discount = Math.round(subtotal * 0.10);
    const finalTotal = subtotal - discount;

    subtotalDisplay.textContent = subtotal;
    discountDisplay.textContent = discount;
    totalDisplay.textContent = finalTotal;

    localStorage.setItem("cart", JSON.stringify(cart));
}

// Change quantity of items
function changeQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) {
        removeFromCart(productId);
    } else {
        updateCartDisplay();
    }
}

// Remove item
function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartDisplay();
}

// Place Order → Redirect to Checkout
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Save cart before checkout
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to checkout page
    window.location.href = "checkout.html";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", updateCartDisplay);
