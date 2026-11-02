let audio = document.getElementById("soundscape");
let video = document.getElementById("bg-video");

let btnPlay = document.getElementById("btn-play");
let btnPause = document.getElementById("btn-pause");
let btnEffect = document.getElementById("btn-effect");

btnPlay.addEventListener("click", function() {
    audio.play();
    video.play();
});

btnPause.addEventListener("click", function() {
    audio.pause();
    video.pause();
});

btnEffect.addEventListener("click", function() {
    video.classList.toggle("vintage-effect");
});