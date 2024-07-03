document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const currentTimeDisplay = document.getElementById('currentTime');
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const displayMessage = document.getElementById('displayMessage');
    const userName = document.getElementById('userName');
    const homeLink = document.getElementById('homeLink');
    const profileLink = document.getElementById('profileLink');
    const homeSection = document.getElementById('homeSection');
    const profileSection = document.getElementById('profileSection');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    function updateCurrentTime() {
        const now = new Date();
        currentTimeDisplay.textContent = now.toString();
    }

    setInterval(updateCurrentTime, 1000);

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = messageForm.name.value;
        const email = messageForm.email.value;
        const phone = messageForm.phone.value;
        const message = messageForm.message.value;

        if (!name || !email || !phone || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        displayName.textContent = name;
        displayEmail.textContent = email;
        displayPhone.textContent = phone;
        displayMessage.textContent = message;

        userName.textContent = name;
        messageForm.reset();
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.style.display = 'block';
        profileSection.style.display = 'none';
    });

    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.style.display = 'none';
        profileSection.style.display = 'block';
    });

    updateCurrentTime();
});
