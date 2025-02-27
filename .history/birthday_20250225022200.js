function flipAndPlay() {
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


function flipAndPlay() {
    const flipInner = document.getElementById('flip-inner-1');
    const video = document.getElementById('Pontone视频');

    // Flip to the video side
    flipInner.classList.add('flipped');

    // Play the video
    video.play();

    // Flip back to the image side when the video ends
    video.onended = function () {
        flipInner.classList.remove('flipped');
    };
}