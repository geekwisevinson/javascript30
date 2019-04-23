const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    toggle.textContent = this.paused ? `\u25BA` : `\u23f8`;
}

function skip() {
    console.log(parseFloat(this.dataset.skip));
    video.currentTime = video.currentTime + parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = Math.round((video.currentTime / video.duration) * 100);
    progressBar.style.flexBasis = `${percent}%`;
    console.log('percent', percent)
}

function scrub(e) {
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log('scrubTime', scrubTime);
    video.currentTime = scrubTime;
    console.log('this')
}


video.addEventListener('play',  updateButton);
video.addEventListener('pause',  updateButton);

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach( button => {
    button.addEventListener('click', skip);
});


ranges.forEach( range => {
    range.addEventListener('change', handleRangeUpdate)
});

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

