document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');

    // Retrieve products from local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Render products
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);

        // Add event listener for "Add to Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', function() {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.push(product);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            alert(`${product.name} has been added to your cart!`);
        });
    });
});
