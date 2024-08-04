// Hamburger menu
let isMenuOpen = false;

function toggleMenu(x) {
    x.classList.toggle("change");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle("active");
    isMenuOpen = navLinks.classList.contains("active");
}

document.addEventListener('click', function(event) {
    const isClickInsideHamburger = document.querySelector('.hamburger').contains(event.target);
    const isClickInsideNavLinks = document.querySelector('.nav-links').contains(event.target);

    if (isMenuOpen && !isClickInsideHamburger && !isClickInsideNavLinks) {
        document.querySelector('.nav-links').classList.remove("active");
        document.querySelector('.hamburger').classList.remove("change");
        isMenuOpen = false;
    }
});

// EmailJS
emailjs.init("MVqs4bejdexAE7d1m");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.target;

    emailjs.sendForm('service_mue4314', 'template_m9yqlpb', form)
        .then(function(response) {
            document.getElementById('response-message').innerText = 'Email sent successfully!';
            form.reset();
        }, function(error) {
            document.getElementById('response-message').innerText = 'Failed to send email. Please try again.';
            console.error('Failed to send email:', error);
        });
});

