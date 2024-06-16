function playVideo() {
    var video = document.getElementById("myVideo");

    // Memeriksa apakah vidio sedang diputar
    if (video.pause) {
        // Jika sedang tidak diputar, mulai pemutaran
        video.play();
    } else {
        // Jika sedang diputar, hentikan pemutaran
        video.pause();
    }
}
function pauseVideo() {
    var video = document.getElementById("myVideo");

    // Memeriksa apakah vidio sedang diputar
    if (video.play) {
        // Jika sedang tidak diputar, mulai pemutaran
        video.pause();
    } else {
        // Jika sedang diputar, hentikan pemutaran
        video.pause();
    }
}
var currentAudio = null;

function playSound(audioId) {
    var audio = document.getElementById(audioId);
    
    if (currentAudio !== audio) {
        if (currentAudio !== null) {
            currentAudio.pause();
        }
        audio.play();
        currentAudio = audio;
    } else {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}
function stopAudio(audioId) {
    var audio = document.getElementById(audioId);
   
    if (currentAudio !== audio) {
        if (currentAudio !== null) {
            currentAudio.play();
        }
        audio.pause();
        currentAudio = audio;
    } else {
        if (audio.play) {
            audio.pause();
        } else {
            audio.play();
        }
    }
}