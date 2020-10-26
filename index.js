const play = document.getElementById('play');
const video = document.getElementById('video');
video.volume = 0.1
play.onclick = function(){
  if (video.paused){
    video.play()
    play.textContent = '*Pause*'
  } else {
    play.textContent = '*Play*'
    video.pause()
  }
}