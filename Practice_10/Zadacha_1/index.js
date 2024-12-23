const thumbnails = document.querySelectorAll('.thumbnail');

const fullImage = document.getElementById('fullImage');

const changeImage = (event) => {
    const largeImageUrl = event.target.getAttribute('data-large');

    fullImage.src = largeImageUrl;
};

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', changeImage);
});