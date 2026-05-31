document.getElementById("checkoutForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("❌ Cart is empty");
        return;
    }

    const orderData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        payment:
            document.querySelector("input[name='payment']:checked")?.value || "cod",
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        }))
    };

    try {
        const response = await fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();

        if (data.success) {
            alert("✅ Order placed successfully!");
            localStorage.removeItem("cart");
            localStorage.removeItem("cartTotal");
            window.location.href = "order-success.html";
        } else {
            alert("❌ Failed to place order");
        }
    } catch (error) {
        alert("⚠️ Backend not running");
        console.error(error);
    }
});
