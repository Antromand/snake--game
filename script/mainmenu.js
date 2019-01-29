var audio = document.querySelector('audio');
audio.volume = 0.1;

var soundOff = document.querySelector('.soundOff');
var soundOn = document.querySelector('.soundOn');
var labelOff = document.querySelector('.labelOff');
var labelOn = document.querySelector('.labelOn');
soundOff.onclick = function() {
	document.querySelector('audio').pause();
	labelOn.style.display = 'block';
	labelOff.style.display = 'none';
}

soundOn.onclick = function() {
	document.querySelector('audio').play();
	labelOn.style.display = 'none';
	labelOff.style.display = 'block';
}
