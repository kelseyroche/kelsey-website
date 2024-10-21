const h2 = document.createElement("h2");
h2.textContent = "Explore with me!";
document.querySelector("body").appendChild(h2);

// app.js

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('photo');
    const button = document.getElementById('changeImageBtn');

    const images = ['images/photo1.JPG', 'images/photo2.JPG','images/photo3.JPG','images/photo4.JPG','images/photo5.JPG','images/photo6.JPG'];
    let currentIndex = 0;

    button.addEventListener('click', () => {
        // Cycle to the next image
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    });
});