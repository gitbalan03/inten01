const products = [
    // 🔌 Electronics
    {
        id: 1,
        name: "Wireless Earbuds",
        price: 1299,
        rating: 4.5,
        category: "electronics",
        image: "images/earpot.webp",
    },
    {
        id: 2,
        name: "Bluetooth Speaker",
        price: 999,
        rating: 4.2,
        category: "electronics",
        image: "images/Bluetooth Speaker.webp",
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 3499,
        rating: 4.6,
        category: "electronics",
        image: "images/watch.webp",
    },
    {
        id: 4,
        name: "Gaming Headset",
        price: 1899,
        rating: 4.5,
        category: "electronics",
        image: "images/Gaming Headset.jpg",
    },
    {
        id: 5,
        name: "Smartphone",
        price: 19999,
        rating: 4.6,
        category: "electronics",
        image: "images/smartphone.webp",
    },
    {
        id: 6,
        name: "Laptop",
        price: 44999,
        rating: 4.7,
        category: "electronics",
        image: "images/Laptop.jpg",
    },
    {
        id: 7,
        name: "Bluetooth Mouse",
        price: 599,
        rating: 4.2,
        category: "electronics",
        image: "images/Bluetooth Mouse.jpeg",
    },
    {
        id: 8,
        name: "Wired Keyboard",
        price: 799,
        rating: 4.1,
        category: "electronics",
        image: "images/keryb.jpg",
    },
    {
        id: 9,
        name: "DSLR Camera",
        price: 35999,
        rating: 4.6,
        category: "electronics",
        image: "images/DSLR Camera.jpg",
    },
    {
        id: 10,
        name: "HDMI Cable",
        price: 299,
        rating: 4.1,
        category: "electronics",
        image: "images/HDMI Cable.webp",
    },
    {
        id: 11,
        name: "Tripod Stand",
        price: 1199,
        rating: 4.4,
        category: "electronics",
        image: "images/Tripod Stand.jpg",
    },
    {
        id: 12,
        name: "Hair Dryer",
        price: 1099,
        rating: 4.2,
        category: "electronics",
        image: "images/Hair Dryer.jpeg",
    },

    // 🧥 Fashion
    {
        id: 13,
        name: "Men's Casual Shirt",
        price: 799,
        rating: 4.0,
        category: "fashion",
        image: "images/Men's Casual Shirt.jpg",
    },
    {
        id: 14,
        name: "Women Handbag",
        price: 1599,
        rating: 4.7,
        category: "fashion",
        image: "images/Women Handbag.webp",
    },
    {
        id: 15,
        name: "Sneakers",
        price: 2499,
        rating: 4.4,
        category: "fashion",
        image: "images/sneakers.webp",
    },
    {
        id: 16,
        name: "Backpack",
        price: 999,
        rating: 4.3,
        category: "fashion",
        image: "images/Backpack.jpeg",
    },
    {
        id: 17,
        name: "Sunglasses",
        price: 699,
        rating: 4.3,
        category: "fashion",
        image: "images/sunglasses.webp",
    },
    {
        id: 18,
        name: "Running Shoes",
        price: 2999,
        rating: 4.6,
        category: "fashion",
        image: "images/Running Shoes.jpeg",
    },
    {
        id: 19,
        name: "T-shirt Pack",
        price: 1199,
        rating: 4.2,
        category: "fashion",
        image: "images/T-shirt Pack.jpg",
    },
    {
        id: 20,
        name: "Leather Belt",
        price: 599,
        rating: 4.3,
        category: "fashion",
        image: "images/begelyt.webp",
    },
    {
        id: 21,
        name: "Formal Trousers",
        price: 1399,
        rating: 4.5,
        category: "fashion",
        image: "images/Formal Trousers.jpeg",
    },

    // 🏠 Home
    {
        id: 22,
        name: "Coffee Maker",
        price: 2999,
        rating: 4.3,
        category: "home",
        image: "images/coffee-maker.webp",
    },
    {
        id: 23,
        name: "Office Chair",
        price: 4999,
        rating: 4.1,
        category: "home",
        image: "images/chair.jpg",
    },
    {
        id: 24,
        name: "Desk Lamp",
        price: 499,
        rating: 4.4,
        category: "home",
        image: "images/Desk Lamp.webp",
    },
    {
        id: 25,
        name: "Electric Kettle",
        price: 1299,
        rating: 4.5,
        category: "home",
        image: "images/Electric Kettle.webp",
    },
    {
        id: 26,
        name: "Microwave Oven",
        price: 6999,
        rating: 4.5,
        category: "home",
        image: "images/Microwave Oven.webp",
    },
    {
        id: 27,
        name: "Blender",
        price: 1799,
        rating: 4.3,
        category: "home",
        image: "images/Blender.webp",
    },
    {
        id: 28,
        name: "Bean Bag",
        price: 2599,
        rating: 4.1,
        category: "home",
        image: "images/Bean Bag.webp",
    },
    {
        id: 29,
        name: "Induction Cooktop",
        price: 2199,
        rating: 4.3,
        category: "home",
        image: "images/Induction Cooktop.webp",
    },
    {
        id: 30,
        name: "Portable Fan",
        price: 899,
        rating: 4.2,
        category: "home",
        image: "images/Portable Fan.webp",
    },
    {
        id: 31,
        name: "Cotton Bedsheet",
        price: 1399,
        rating: 4.4,
        category: "home",
        image: "images/Cotton Bedsheet.webp",
    },
    {
        id: 32,
        name: "Wall Clock",
        price: 799,
        rating: 4.3,
        category: "home",
        image: "images/Wall Clock.webp",
    },

    // 🏋️ Fitness
    {
        id: 33,
        name: "Yoga Mat",
        price: 699,
        rating: 4.4,
        category: "fitness",
        image: "images/yogoga matas.webp",
    },
    {
        id: 34,
        name: "Fitness Tracker",
        price: 2299,
        rating: 4.4,
        category: "fitness",
        image: "images/Fitness Tracker.jpg ",
    },
    {
        id: 35,
        name: "Sports Bottle",
        price: 499,
        rating: 4.2,
        category: "fitness",
        image: "images/Sports Bottle.webp",
    },
    {
        id: 36,
        name: "Yoga Dress",
        price: 699,
        rating: 4.4,
        category: "fitness",
        image: "images/Yoga Dress.jpeg", // You may want to update this image if incorrect
    }
];


// Utility to show stars
function getStars(rating) {
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fullStars - halfStar;

    return (
        "★".repeat(fullStars) +
        (halfStar ? "⯪" : "") +
        "☆".repeat(emptyStars)
    );
}

// Add product to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let prod = products.find(p => p.id === productId);

    if (!prod) return alert("Product not found.");

    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...prod, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${prod.name} added to cart!`);
}

// Render Featured Products on Home Page
function renderFeaturedProducts() {
    const featuredDiv = document.getElementById("featuredProducts");
    if (!featuredDiv) return;

    // Show first 4 products as featured
    featuredDiv.innerHTML = "";
    products.slice(0, 4).forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card fade-in";

        card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <div class="rating">${getStars(p.rating)}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
        featuredDiv.appendChild(card);
    });
}

// Filter Featured Products on Home page Search
function filterFeaturedProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    const featuredDiv = document.getElementById("featuredProducts");
    featuredDiv.innerHTML = "";

    filtered.slice(0, 4).forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card fade-in";

        card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <div class="rating">${getStars(p.rating)}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
        featuredDiv.appendChild(card);
    });
}

// Render All Products on Products page
function renderProducts(productList) {
    const productListDiv = document.getElementById("productList");
    if (!productListDiv) return;

    productListDiv.innerHTML = "";

    if (productList.length === 0) {
        productListDiv.innerHTML = "<p>No products found.</p>";
        return;
    }

    productList.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card fade-in";

        card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <div class="rating">${getStars(p.rating)}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
        productListDiv.appendChild(card);
    });
}

// Filter products on Products page
function filterProducts() {
    let search = document.getElementById("productSearch").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let sort = document.getElementById("sortPrice").value;

    let filtered = products.filter(p => p.name.toLowerCase().includes(search));

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}
// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// Render Today’s Deals
function renderTodaysDeals() {
    const dealsDiv = document.getElementById("todaysDeals");
    if (!dealsDiv) return;

    // Pick 4 random products for deals
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const deals = shuffled.slice(0, 4);

    dealsDiv.innerHTML = "";
    deals.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card deal-card fade-in";

        card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <p class="offer">Limited Time Offer!</p>
        <div class="rating">${getStars(p.rating)}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
        dealsDiv.appendChild(card);
    });
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
    renderFeaturedProducts();
    renderProducts(products);
});
