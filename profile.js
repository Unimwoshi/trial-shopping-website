// Profile Functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Check if the user is logged in
    if (!currentUser) {
        alert('You must be logged in to view this page.');
        window.location.href = 'login.html';
    }

    // Display username
    document.getElementById('username-display').textContent += currentUser.username;

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    // Edit profile functionality (to be implemented)
    document.getElementById('edit-profile').addEventListener('click', function() {
        alert('Edit profile functionality to be implemented.');
    });
});
