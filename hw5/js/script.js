document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById("video");
    const videoElement2 = document.getElementById("video2");

    if (!videoElement || !videoElement2) {
        console.error("Video elements not found");
        return;
    }

    // ... 之前的 JavaScript 代碼保持不變 ...

    // 顯示和隱藏影片區段
    window.addEventListener("scroll", function() {
        if (currentScrollPosition >= firstVideoStart && currentScrollPosition <= firstVideoEnd) {
            document.querySelector("#video-container").style.display = "block";
        } else {
            document.querySelector("#video-container").style.display = "none";
        }

        if (currentScrollPosition >= secondVideoStart && currentScrollPosition <= secondVideoEnd) {
            document.querySelector("#video-container2").style.display = "block";
        } else {
            document.querySelector("#video-container2").style.display = "none";
        }
    });
});
