document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('add-product-form');
    const existingProductsList = document.getElementById('existing-products');

    // Load existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.forEach(product => {
        addProductToList(product);
    });

    // Add event listener for the add product form
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').value;

        const newProduct = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        // Save new product to local storage
        existingProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(existingProducts));
        addProductToList(newProduct);
        addProductForm.reset();
        alert(`${productName} has been added!`); // Alert to confirm addition
    });
});

// Function to add product to the list
function addProductToList(product) {
    const existingProductsList = document.getElementById('existing-products');
    const productItem = document.createElement('li');
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <strong>₦${product.price}</strong>
        <button class="remove-product">Remove</button>
    `;
    existingProductsList.appendChild(productItem);

    // Add event listener for the remove button
    productItem.querySelector('.remove-product').addEventListener('click', function() {
        removeProduct(product);
    });
}

function removeProduct(product) {
    let existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts = existingProducts.filter(p => p.name !== product.name);
    localStorage.setItem('products', JSON.stringify(existingProducts));
    location.reload(); // Reload to update the display
}
