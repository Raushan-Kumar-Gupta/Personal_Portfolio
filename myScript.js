document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let currentIndex = 0;

    // Function to update the carousel
    const updateCarousel = (index) => {
        document.querySelector('.carousel-images').style.transform = `translateX(-${index * 100}%)`;
    };

    // Function to move to the next image
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel(currentIndex);
    };

    // Function to move to the previous image
    const prevImage = () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel(currentIndex);
    };

    // Event listeners for the carousel buttons
    document.querySelector('.carousel-button.right').addEventListener('click', nextImage);
    document.querySelector('.carousel-button.left').addEventListener('click', prevImage);

    // Automatically change images every 3 seconds
    setInterval(nextImage, 3000);
});

// Function to toggle menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('change');
}



// ---------------------------------------------------project-------------------------


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = x - centerX;
            const deltaY = y - centerY;
            const percentX = deltaX / centerX;
            const percentY = deltaY / centerY;
            card.style.transform = `rotateY(${percentX * 10}deg) rotateX(${percentY * -10}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        });
    });
});




