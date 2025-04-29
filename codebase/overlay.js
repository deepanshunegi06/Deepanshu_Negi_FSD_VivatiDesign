
   document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const overlayContainer = document.querySelector('.overlay-container');
    const mediaContainer = document.querySelector('.overlay-content');
    const closeButton = document.querySelector('.close-button');

    // Handle gallery item click
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const media = item.querySelector('img, video');
            const clonedMedia = media.cloneNode(true);

            // Clear previous content
            mediaContainer.innerHTML = '';
            mediaContainer.appendChild(clonedMedia);

            // Show overlay
            overlayContainer.style.display = 'flex';

            // Handle video playback and controls
            if (clonedMedia.tagName === 'VIDEO') {
                clonedMedia.controls = false;
                clonedMedia.muted = false;
                clonedMedia.play().catch(err => console.log("Video playback error:", err));
            }
        });
    });

    // Close overlay on close button click
    closeButton.addEventListener('click', () => {
        closeOverlay();
    });

    // Close overlay on clicking outside media
    overlayContainer.addEventListener('click', (e) => {
        if (e.target === overlayContainer) {
            closeOverlay();
        }
    });

    // Prevent overlay close when clicking on the media itself
    mediaContainer.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop the click event from propagating to the overlay
    });

    // Close overlay function
    function closeOverlay() {
        overlayContainer.style.display = 'none';

        // Pause video if active
        const activeVideo = mediaContainer.querySelector('video');
        if (activeVideo) {
            activeVideo.pause();
        }
    }

    // Close overlay on pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeOverlay();
        }
    });
});

  