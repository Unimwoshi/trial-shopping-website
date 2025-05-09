// Admin Management Script
document.addEventListener('DOMContentLoaded', function() {
    const existingAdminsList = document.getElementById('existing-admins');
    const addAdminForm = document.getElementById('add-admin-form');

    // Load existing admins from local storage
    const existingAdmins = JSON.parse(localStorage.getItem('admins')) || [];
    existingAdmins.forEach(admin => {
        addAdminToList(admin);
    });

    // Add event listener for the add admin form
    addAdminForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const adminName = document.getElementById('admin-name').value;
        const adminEmail = document.getElementById('admin-email').value;

        const newAdmin = {
            name: adminName,
            email: adminEmail
        };

        // Save new admin to local storage
        existingAdmins.push(newAdmin);
        localStorage.setItem('admins', JSON.stringify(existingAdmins));
        addAdminToList(newAdmin);
        addAdminForm.reset();
    });
});

// Function to add admin to the list
function addAdminToList(admin) {
    const existingAdminsList = document.getElementById('existing-admins');
    const adminItem = document.createElement('li');
    adminItem.textContent = `${admin.name} - ${admin.email}`;
    existingAdminsList.appendChild(adminItem);
}
