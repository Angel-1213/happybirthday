function flipAndPlay(flipInnerId, videoId) {
    const flipInner = document.getElementById(flipInnerId);
    const video = document.getElementById(videoId);

    // Flip to the video side
    flipInner.classList.add('flipped');

    // Play the video
    video.play();

    // Flip back to the image side when the video ends
    video.onended = function () {
        flipInner.classList.remove('flipped');
    };
}