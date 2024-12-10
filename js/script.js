document.addEventListener('DOMContentLoaded', function() {
    const floatingImagesContainer = document.querySelector('.floating-images');
    const numberOfImages = 10;

    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('div');
        img.classList.add('floating-image');
        img.style.left = `${Math.random() * 100}%`;
        img.style.animationDelay = `${Math.random() * 20}s`;
        floatingImagesContainer.appendChild(img);
    }
});