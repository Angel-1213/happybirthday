function flipAndPlay() {
    console.log("Flip and play function triggered!"); // Debugging
    const flipInner = document.getElementById('flip-inner');
    const video = document.getElementById('爷爷奶奶视频');

    // Flip to the video side
    flipInner.classList.add('flipped');

    // Play the video
    video.play();

    // Flip back to the image side when the video ends
    video.onended = function () {
        flipInner.classList.remove('flipped');
    };
}