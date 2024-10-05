const range = document.getElementById('range');
const playPause = document.getElementById('playPause');
const song = document.getElementById('song');

song.onloadedmetadata = () => {
    range.max = song.duration;
    range.value = song.currentTime;
}


function playMusic() {
    if (playPause.classList.contains("fa-pause")) {
        song.pause();
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
    }
    else {
        song.play();
        playPause.classList.remove("fa-play")
        playPause.classList.add("fa-pause")
    }
};

if (song.play()) {
    setInterval(() => {
        range.value = song.currentTime;
    }, 500);
}

range.onchange = () => {
    song.play();
    song.currentTime = range.value;
    playPause.classList.remove("fa-play")
    playPause.classList.add("fa-pause")
}
