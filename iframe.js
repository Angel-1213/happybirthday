// Get references to the cake GIF and iframe container
const cakeGif = document.getElementById("cake");
const iframeContainer = document.getElementById("iframe-container");

// Add a click event listener to the cake GIF
cakeGif.addEventListener("click", function () {
    // Toggle the 'visible' class on the iframe container
    iframeContainer.classList.toggle("visible");
});
