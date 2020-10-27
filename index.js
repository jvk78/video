'use strict';

var play = document.getElementById('play');
var video = document.getElementById('video');
var delay = void 0;
var update = void 0;
var updateDelay = void 0;
var noActiveDelay = 5;
var nowNoActiv = 0;
//let resetnowNoActiv;
video.volume = 0;
play.onclick = toggleFullScreen;

function toggleFullScreen() {
    if (video.requestFullScreen) {
        video.requestFullScreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen(); //for iphone this code worked
    }
}
//window.onload = () => {
// console.log(video.onloadedmetadata)
//  if (video.paused){
//hideTools()
//    video.play()
//  } else {
//    play.textContent = '*Play*'
//    video.pause()
//  }
//} 
//
//function hideTools() {
//
//delay = setInterval('nowNoActiv++', 1000)
//update = setInterval('updateDelay()', 1000)
//  
//
//function resetnowNoActiv() {nowNoActiv = 0}
//updateDelay = function() {
//  
////  console.log(nowNoActiv)
//  if (nowNoActiv >= noActiveDelay) {
//    clearInterval(delay)
//    clearInterval(update)
//    cons()
//    return;
//  }
//}
//
//  window.onclick = resetnowNoActiv
//  window.onmousemove = resetnowNoActiv
//  window.ontouchstart = resetnowNoActiv
//  window.ontouchmove = resetnowNoActiv
//
//}
////const cons = () => console.log('Menu hide')
//}