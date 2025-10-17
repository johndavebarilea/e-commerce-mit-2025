document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('#close-menu');
    const menuAboutDesktop = document.querySelector('#menu-about');  // For desktop
    const menuAboutMobile = document.querySelector('#mobile-menu-about');  // For mobile
    const mainContent = document.querySelector('#main-content');
    const aboutSection = document.querySelector('#about-section');
    const backToHomeButton = document.querySelector('#back-to-home');
    
    if (menuIcon && mobileMenu && closeMenuButton && menuAboutDesktop && menuAboutMobile && mainContent && aboutSection && backToHomeButton) {
        // Existing: Toggle mobile menu
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        closeMenuButton.addEventListener('click', function(event) {
            event.preventDefault();
            mobileMenu.classList.remove('active');
        });
        
        document.addEventListener('click', function(event) {
            if (mobileMenu.classList.contains('active')) {
                if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
        
        // New: Handle About link clicks
        menuAboutDesktop.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior
            mainContent.style.display = 'none';  // Hide main content
            aboutSection.style.display = 'block';  // Show About section
        });
        
        menuAboutMobile.addEventListener('click', function(event) {
            event.preventDefault();
            mobileMenu.classList.remove('active');  // Close mobile menu first
            mainContent.style.display = 'none';
            aboutSection.style.display = 'block';
        });
        
        // New: Handle Back to Home button
        backToHomeButton.addEventListener('click', function() {
            aboutSection.style.display = 'none';  // Hide About section
            mainContent.style.display = 'block';  // Show main content
        });
    } else {
        console.error('One or more elements not found. Check your HTML.');
    }
});