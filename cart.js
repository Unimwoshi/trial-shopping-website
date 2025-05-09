// Cart Management Script
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;

    // Clear existing items
    cartItemsList.innerHTML = '';

    // Render cart items
    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <strong>${item.name}</strong> - ₦${item.price}
            <button class="decrease-quantity">-</button>
            <span class="item-quantity">${item.quantity || 1}</span>
            <button class="increase-quantity">+</button>
        `;
        cartItemsList.appendChild(cartItem);
        totalPrice += parseFloat(item.price) * (item.quantity || 1); // Update total price calculation
    });

    // Update total price
    totalPriceElement.innerHTML = `<label>Total Price: </label><span>₦</span>${totalPrice.toFixed(2)}`;

    // Add event listeners for quantity buttons
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('strong').textContent;
            const itemQuantityElement = this.parentElement.querySelector('.item-quantity');
            let quantity = parseInt(itemQuantityElement.textContent) + 1;
            itemQuantityElement.textContent = quantity;

            // Update cart in local storage
            const updatedCartItems = cartItems.map(cartItem => {
                if (cartItem.name === itemName) {
                    cartItem.quantity = quantity;
                }
                return cartItem;
            });
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            updateTotalPrice(); // Update total price after changing quantity
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('strong').textContent;
            const itemQuantityElement = this.parentElement.querySelector('.item-quantity');
            let quantity = parseInt(itemQuantityElement.textContent) - 1;

            if (quantity < 1) {
                // Remove item from cart if quantity is less than 1
                const updatedCartItems = cartItems.filter(cartItem => cartItem.name !== itemName);
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                location.reload(); // Reload to update the cart display
            } else {
                itemQuantityElement.textContent = quantity;

                // Update cart in local storage
                const updatedCartItems = cartItems.map(cartItem => {
                    if (cartItem.name === itemName) {
                        cartItem.quantity = quantity;
                    }
                    return cartItem;
                });
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                updateTotalPrice(); // Update total price after changing quantity
            }
        });
    });

    // Add event listener for delete all button
    document.getElementById('delete-all').addEventListener('click', function() {
        localStorage.removeItem('cartItems');
        location.reload(); // Reload to update the cart display
    });

    // Function to update total price
    function updateTotalPrice() {
        totalPrice = 0; // Reset total price
        cartItems.forEach(item => {
            totalPrice += parseFloat(item.price) * (item.quantity || 1);
        });
        totalPriceElement.innerHTML = `<label>Total Price:</label><span>₦</span>${totalPrice.toFixed(2)}`;
    }
});
