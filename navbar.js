// Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    const loginButton = document.getElementById('login-button');
    const profileSection = document.getElementById('profile-section');

    if (currentUser) {
        // User is logged in, show profile section
        loginButton.style.display = 'none';
        profileSection.style.display = 'block';
        document.getElementById('username-display').textContent = currentUser.username || '';

    } else {
        // User is logged out, show login button
        loginButton.style.display = 'block';
        profileSection.style.display = 'none';
    }

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html'; // Ensure it redirects to the login page
    });
});
