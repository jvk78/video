'use strict';

var play = document.getElementById('play');
var video = document.getElementById('video');
var full = document.getElementById('full');
var wrapper = document.getElementById('wrapper');
var delay = void 0;
var update = void 0;
var updateDelay = void 0;
var noActiveDelay = 5;
var nowNoActiv = 0;
//let resetnowNoActiv;
video.volume = 0;
play.onclick = playVideo;
full.onclick = toggleFullScreen;

function toggleFullScreen() {
    if (wrapper.requestFullScreen) {
        wrapper.requestFullScreen();
    } else if (wrapper.webkitRequestFullScreen) {
        wrapper.webkitRequestFullScreen();
    } else if (wrapper.mozRequestFullScreen) {
        wrapper.mozRequestFullScreen();
    } else if (wrapper.msRequestFullscreen) {
        wrapper.msRequestFullscreen();
    } else if (wrapper.webkitEnterFullscreen) {
        wrapper.webkitEnterFullscreen(); //for iphone this code worked
    }
}

function playVideo() {
    if (video.paused) {
        video.play();
    } else {

        video.pause();
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