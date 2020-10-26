'use strict';

var play = document.getElementById('play');
var video = document.getElementById('video');
video.volume = 0.1;
play.textContent = 'Go';
play.addEventListener('click', function () {
  if (video.paused) {
    play.textContent = '*Play*';
    video.play();
  } else {
    play.textContent = '*Play*';
    video.pause();
  }
});
