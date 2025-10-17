document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('#close-menu');  // For the X icon
    
    if (menuIcon && mobileMenu && closeMenuButton) {
        // Toggle menu on hamburger icon click
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu on X icon click
        closeMenuButton.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent any default link behavior
            mobileMenu.classList.remove('active');  // Remove active class to close
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (mobileMenu.classList.contains('active')) {
                // Check if the click is outside the menu and not on the hamburger icon
                if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    } else {
        console.error('One or more elements not found. Check your HTML.');
    }
});