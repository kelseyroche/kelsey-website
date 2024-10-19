const h2 = document.createElement("h2");
h2.textContent = "Explore with me!";
document.querySelector("body").appendChild(h2);

// app.js

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('photo');
    const button = document.getElementById('changeImageBtn');

    const images = ['images/photo1.jpg', 'images/photo2.jpg','images/photo3.jpg','images/photo4.jpg','images/photo5.jpg','images/photo6.jpg'];
    let currentIndex = 0;

    button.addEventListener('click', () => {
        // Cycle to the next image
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    });
});