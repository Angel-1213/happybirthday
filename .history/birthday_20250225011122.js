function flipAndPlay() {
    const flipInner = document.getElementById('flip-inner');
    const video = document.getElementById('video');

    // Flip to the video side
    flipInner.classList.add('flipped');

    // Play the video
    video.play();

    // Flip back to the image side when the video ends
    video.onended = function () {
        flipInner.classList.remove('flipped');
    };
}