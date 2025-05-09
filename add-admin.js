// Add Admin Functionality
document.addEventListener('DOMContentLoaded', function() {
    const addAdminForm = document.getElementById('add-admin-form');
    const adminList = document.getElementById('admin-list');

    // Load current admins from local storage
    const admins = JSON.parse(localStorage.getItem('admins')) || [
        { username: 'admin', password: 'admin123' } // Hardcoded admin credentials
    ];

    displayAdmins(admins);

    // Add new admin
    addAdminForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newAdminUsername = document.getElementById('new-admin-username').value;
        const newAdminPassword = document.getElementById('new-admin-password').value;

        // Check if the username already exists
        if (admins.find(admin => admin.username === newAdminUsername)) {
            alert('Admin username already exists.');
            return;
        }

        const newAdmin = { username: newAdminUsername, password: newAdminPassword };
        admins.push(newAdmin);
        localStorage.setItem('admins', JSON.stringify(admins));
        displayAdmins(admins);
        alert('You do not have permission to add a new admin.');

        addAdminForm.reset();
    });

    function displayAdmins(admins) {
        adminList.innerHTML = ''; // Clear the list before displaying
        admins.forEach(admin => {
            const listItem = document.createElement('li');
            listItem.textContent = admin.username;
            adminList.appendChild(listItem);
        });
    }
});
