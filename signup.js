// Signup Functionality
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [
        { username: 'admin', password: 'admin123', role: 'admin' } // Hardcoded admin credentials
    ];

    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        alert('Username already exists. Please choose a different username.');
    } else {
        const newUser = { username, password, role: 'customer' }; // Default role is customer


        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! You can now log in.');
        window.location.href = 'login.html';
    }
});
