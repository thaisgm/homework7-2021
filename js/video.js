var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

function playVideo() {
    video.play();
};

function pauseVideo() {
    video.pause();
}

function skipVideo() {
	if (video.currentTime <= (video.duration - 15)) {
		video.currentTime = video.currentTime + 15;
		playVideo();
	} else{
		video.currentTime = 0;
		playVideo();
	}
}

function muteVideo() {
	video.muted = true;
}

function unmuteVideo() {
	video.muted = false;
}

document.querySelector('#play').addEventListener("click", function() {
	console.log("Play Video");
	playVideo();
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	pauseVideo();
});

document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (1 - 0.05);
	console.log("Slow down Video, current speed: " + video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (1 + 0.05);
	console.log("Speed up Video, current speed: " + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	skipVideo();
	console.log("Current location: " + video.currentTime);
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == false){
		muteVideo();
		document.querySelector('#mute').innerText = 'Unmute';
		document.querySelector('#slider').value = 0;
	} else {
		unmuteVideo();
		document.querySelector('#mute').innerText = 'Mute';
		document.querySelector('#slider').value = video.volume * 100;
	}
});

document.querySelector('#slider').addEventListener("change", function() {
	console.log("Volume Before: " + video.volume);
	currentVolume = document.querySelector('#slider').value;
	video.volume = currentVolume / 100;
	console.log("Volume After: " + video.volume);

});

document.querySelector('#vintage').addEventListener("click", function(){
	video.classList.add("oldSchool");

});


document.querySelector('#orig').addEventListener("click", function(){
	video.classList.remove("oldSchool");

});






