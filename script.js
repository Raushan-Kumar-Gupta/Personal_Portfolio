document.addEventListener('DOMContentLoaded', function() {
    // GSAP animations for the About Me section

    gsap.to(".about-col-2", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Sequential animation for the list items
    gsap.fromTo(".about-col-2 ul li", {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1,
        onComplete: function() {
            // Loop through each list item to change the text color automatically
            const listItems = document.querySelectorAll(".about-col-2 ul li");
            listItems.forEach((item, index) => {
                gsap.to(item, {
                    color: getComputedStyle(item, '::before').color,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                    delay: 0.5 * index
                });
            });
        }
    });
});



// Add event listeners to all cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ff004f'; // Change background color to light red
    });
    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#1e1e1e'; // Restore original background color
    });
});




function showSection(sectionId, button) {
    var sections = document.querySelectorAll('.portfolio-content');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    var buttons = document.querySelectorAll('.button-group button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

// Show the skills section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('skills', document.getElementById('skills-btn'));
});


// Array of certificate image URLs
const certificateImages = [
    'images/cert1.jpg',
    'images/cert2.jpg',
    'images/cert3.jpg',
    'images/cert4.jpg'
];

// Function to generate certificate thumbnails
function generateCertificateThumbnails() {
    const certificateGallery = document.querySelector('.certificate-gallery');
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('certificate-column');
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('certificate-column');
    certificateImages.forEach((imageUrl, index) => {
        const certificateItem = document.createElement('div');
        certificateItem.classList.add('certificate-item');
        certificateItem.innerHTML = `<img src="${imageUrl}" alt="Certificate">`;
        certificateItem.onclick = function() {
            openCertificate(imageUrl);
        };
        if (index < 2) {
            leftColumn.appendChild(certificateItem);
        } else {
            rightColumn.appendChild(certificateItem);
        }
    });
    certificateGallery.appendChild(leftColumn);
    certificateGallery.appendChild(rightColumn);
}

// Function to open certificate popup
function openCertificate(imageUrl) {
    document.getElementById('certificate-img').src = imageUrl;
    document.getElementById('certificate-popup').style.display = 'block';
}

// Function to close certificate popup
function closeCertificatePopup() {
    document.getElementById('certificate-popup').style.display = 'none';
}

// Generate certificate thumbnails on page load
generateCertificateThumbnails();

// -----------------------------------------------project-----------------------------------

