const videoPlayer = document.querySelector(".player"),
  video = document.querySelector(".player__video"),
  controls = document.querySelector(".player__controls"),
  playPause = document.querySelector(".toggle");

// Play / pause event listener
video.addEventListener("click", () => {
  video.paused ? video.play() : video.pause();
});
playPause.addEventListener("click", () => {
  video.paused ? video.play() : video.pause();
});

//
