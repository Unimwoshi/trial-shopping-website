// Login Functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [
        { username: 'admin', password: 'admin123', role: 'admin' } // Hardcoded admin credentials
    ];

    const user = users.find(u => (u.username === username && u.password === password) || 
        (username === 'admin' && password === 'admin123'));


    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login successful!');
        window.location.href = user.role === 'admin' ? 'admin.html' : 'products.html';
    } else {
        alert('Invalid username or password.');
    }
});
