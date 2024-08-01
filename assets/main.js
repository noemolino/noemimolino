// jQuery
// const scriptJQuery = document.createElement('script');
// scriptJQuery.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
// scriptJQuery.integrity = 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj';
// scriptJQuery.crossOrigin = 'anonymous';
// document.head.appendChild(scriptJQuery);

// Popper.js
// const scriptPopper = document.createElement('script');
// scriptPopper.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js';
// scriptPopper.integrity = 'sha384-ZmpiyWGzwSmHI/7kzPgZdzNgf9pqMgn4kQW5hvpt4ySFP4YJBNO1Wt9CUX5mrpXX';
// scriptPopper.crossOrigin = 'anonymous';
// document.head.appendChild(scriptPopper);

// // Bootstrap JS
// const scriptBootstrap = document.createElement('script');
// scriptBootstrap.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
// scriptBootstrap.integrity = 'sha384-B4gt1jrGC7Jh4Agp8K1aQ8ohOV7coD2XWZdLM3/PMZam2E1MqqcxEu59kXAm4nxk';
// scriptBootstrap.crossOrigin = 'anonymous';
// document.head.appendChild(scriptBootstrap);

// JS code
let isMenuOpen = false;

function toggleMenu(x) {
    x.classList.toggle("change");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle("active");
    isMenuOpen = navLinks.classList.contains("active");
}

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideHamburger = document.querySelector('.hamburger').contains(event.target);
    const isClickInsideNavLinks = document.querySelector('.nav-links').contains(event.target);

    if (isMenuOpen && !isClickInsideHamburger && !isClickInsideNavLinks) {
        document.querySelector('.nav-links').classList.remove("active");
        document.querySelector('.hamburger').classList.remove("change");
        isMenuOpen = false;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollRows = document.querySelectorAll('.scroll-row .scroll-content');

    scrollRows.forEach(row => {
        const content = row.innerHTML;
        row.innerHTML = content + content; // Duplica i loghi per scorrimento continuo
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);

    scrollRows.forEach(row => {
        observer.observe(row);
    });
});

// Replace with your own user ID from EmailJS
emailjs.init("MVqs4bejdexAE7d1m");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const form = event.target;

    emailjs.sendForm('service_mue4314', 'template_m9yqlpb', form)
        .then(function(response) {
            document.getElementById('response-message').innerText = 'Email sent successfully!';
            form.reset(); // Optional: Reset the form fields after submission
        }, function(error) {
            document.getElementById('response-message').innerText = 'Failed to send email. Please try again.';
            console.error('Failed to send email:', error);
        });
});

