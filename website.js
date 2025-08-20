
const joinLink = document.getElementById('join-link');
const headerDropdown = document.getElementById('header-dropdown');
joinLink.addEventListener('click', function(event) {
    event.preventDefault();
    headerDropdown.classList.toggle('active');
});
const servicesBtn = document.querySelector('.services-btn');
const servicesDropdown = document.getElementById('services-dropdown');
servicesBtn.addEventListener('click', function() {
    servicesDropdown.classList.toggle('show');
});
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('show');
        });
        if (!isActive) {
            this.classList.add('active');
            answer.classList.add('show');
        }
    });
});

// Floating CTA Button Logic (Termify style)
const floatingCta = document.getElementById('floating-cta');
const contactModal = document.getElementById('contact-modal');
const closeModalBtn = document.querySelector('.close-btn');

floatingCta.addEventListener('click', function(event) {
    event.preventDefault();
    contactModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    contactModal.style.display = 'none';
});

// Close modal if user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = 'none';
    }
});
