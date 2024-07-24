document.addEventListener('DOMContentLoaded', function() {
    const galleryView = document.querySelector('.gallery-view');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;

    // Function to show image at a specific index
    function showImage(index) {
        if (index < 0 || index >= thumbnails.length) {
            return;
        }
        currentIndex = index;
        const imageUrl = thumbnails[index].src.replace('-thumb', '');
        galleryView.querySelector('img').src = imageUrl;
    }

    // Show the first image by default
    showImage(currentIndex);

    // Event listeners for previous and next buttons
    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    });

    // Event listeners for thumbnails
    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener('click', function(e) {
            e.preventDefault();
            showImage(index);
        });
    });
});
