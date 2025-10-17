document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');  // Select all forms on the page
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent actual submission
            alert('Email campaign action simulated! In a real setup, this would integrate with Mailchimp or similar tools.');
            // You could add more logic here, like sending data to an API
        });
    });
    
    // Additional function for campaign simulation if needed
    window.simulateCampaign = function() {
        alert('Simulating email campaign launch. Check your email tool for real results.');
    };
});