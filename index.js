const play = document.getElementById('play');
const video = document.getElementById('video');
video.volume = 0.1
play.addEventListener('click', () => {
  if (video.paused){
    video.play()
  } else {
    video.pause()
  }
})