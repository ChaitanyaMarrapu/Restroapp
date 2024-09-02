// scripts.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic image slider for the home page
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');  
    slideIndex++;
    if (slideIndex > totalSlides) {slideIndex = 1}    
    slides[slideIndex-1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

if (slides.length > 0) {
    showSlides();
}

// Basic form validation for the contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;
            
            let valid = true;
            let errorMessage = '';
            
            if (!name) {
                valid = false;
                errorMessage += 'Name is required.\n';
            }
            
            if (!email || !validateEmail(email)) {
                valid = false;
                errorMessage += 'A valid email address is required.\n';
            }
            
            if (!message) {
                valid = false;
                errorMessage += 'Message cannot be empty.\n';
            }
            
            if (!valid) {
                event.preventDefault(); // Prevent form submission
                alert(errorMessage);
            }
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
