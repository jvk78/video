'use strict';

var play = document.getElementById('play');
var video = document.getElementById('video');
video.volume = 0.1;
play.onclick = function () {
  if (video.paused) {
    video.play();
  } else {
    play.textContent = '*Play*';
    video.pause();
  }
};
  play.textContent += 'Ready';

play.onclick = function () {
  play.textContent += '*Pause*';
};
