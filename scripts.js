//---------------------
// Elements & variables
//---------------------

const videoPlayer = document.querySelector(".player"),
  video = videoPlayer.querySelector(".player__video"),
  controls = videoPlayer.querySelector(".player__controls"),
  volume = controls.querySelector("#volume"),
  speed = controls.querySelector("#speed"),
  playPause = videoPlayer.querySelector(".toggle"),
  progressBar = videoPlayer.querySelector(".progress"),
  progress = progressBar.querySelector(".progress__filled"),
  skipButtons = videoPlayer.querySelectorAll("[data-skip]");

// ---------------
// Event listeners
//----------------

// Play / pause video
video.addEventListener("click", togglePlay);
playPause.addEventListener("click", togglePlay);
// Update play / pause button
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// Displaying a time bar
video.addEventListener("play", updateProgressBar);
// Skipping
skipButtons.forEach((button) => button.addEventListener("click", jump));
// Speed
speed.addEventListener("change", rangeUpdate);
// Volume
volume.addEventListener("change", rangeUpdate);
// Update progress
video.addEventListener("timeupdate", updateProgressBar);
// Move in video
progressBar.addEventListener("click", moveThrough);

// ---------
// Functions
//----------

//  Function to jump head or back
function jump() {
  video.currentTime += Number(this.dataset.skip);
  updateProgressBar();
}

// play or pause video depending on its state
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

// Update play / pause button
function updateButton() {
  playPause.textContent = this.paused ? "▶︎" : "| |";
}

// Update progress bar
function updateProgressBar() {
  progress.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

function rangeUpdate() {
  video[this.name] = this.value;
}

function moveThrough(event) {
  video.currentTime =
    (event.offsetX / progressBar.offsetWidth) * video.duration;
}
