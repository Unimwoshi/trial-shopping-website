// Products Functionality
document.addEventListener('DOMContentLoaded', function() {
    loadExistingProducts();
});

// Function to load existing products
function loadExistingProducts() {
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    let existingProductsList = document.getElementById('existing-products');
    
    if (!existingProductsList) {
        // Create the product list if it doesn't exist
        const main = document.querySelector('main');
        existingProductsList = document.createElement('ul');
        existingProductsList.id = 'existing-products';
        main.appendChild(existingProductsList);
    }

    existingProductsList.innerHTML = ''; // Clear the list before loading

    existingProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <strong>&#8358;${product.price}</strong><br>
            <button class="add-to-cart">Add to Cart</button>
        `;

        existingProductsList.appendChild(productItem);
        
        // Add event listener for the "Add to Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', function() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            
            // Check if the item already exists in the cart
            const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === product.name);
            if (existingItemIndex > -1) {
                // If it exists, increase the quantity
                cartItems[existingItemIndex].quantity += 1;
            } else {
                // If it doesn't exist, add it to the cart with quantity 1
                product.quantity = 1; // Set initial quantity
                cartItems.push(product);
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Updated key to 'cartItems'
            alert(`${product.name} has been added to your cart!`);
        });
    });
}
