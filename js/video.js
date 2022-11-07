var video = document.getElementById('player1');

function loading(){
	console.log("Good job opening the window");
	video.autoplay = false;
	window.loop=false;
	video.load();
}

window.addEventListener("load", loading())

// Plays the video when clicking the play button

document.querySelector('#play').addEventListener('click', function(){
	console.log("play the video!");
	video.play();
	// following two lines update the volume percentage shown ONLY WHEN play buttom is clicked again
	var vol = document.getElementById('slider').value;
	document.getElementById('volume').innerHTML = vol + '%';
})

// Pauses the video when clicking the pause button

document.querySelector('#pause').addEventListener('click', function(){
	console.log("pause the video:(");
	video.pause();
})

// Slow the video down when clicking the slower button

document.querySelector('#slower').addEventListener('click', function(){
	console.log("slow the video:(");
	video.playbackRate /= 1.1;
	console.log("the current speed is "+ video.playbackRate);
	// document.querySelector('#player1').play();
})

// speed up video when pressing the faster button

document.querySelector('#faster').addEventListener('click', function(){
	console.log("speed the video:)");
	video.playbackRate *= 1.1;
	console.log("the current speed is "+ video.playbackRate);
	// document.querySelector('#player1').play();
})

// mutes the video when mute button is pressed- updates the mute status

document.querySelector('#mute').addEventListener('click', function(){
	var vid = document.querySelector(".video");
	// vid.muted = true;
	// document.querySelector('.mute').innerHTML = 'HELLO'
	console.log("mute function")

	// const btn = document.getElementById("mute");

	if(vid.muted === true){
		vid.muted = false;
        document.getElementById("mute").innerHTML= "Mute";
	
    }else{
		vid.muted = true;
        document.getElementById("mute").innerHTML= "Unmute";
		
    }
})

// skip 10 seconds forward in video
document.querySelector('#skip').addEventListener('click', function(){
	if (video.duration < (video.currentTime+10)){
		video.currentTime = 0;
		console.log('the time of the video is' + video.currentTime);
	}
	else{
		console.log("skip forward ten seconds");
    	video.currentTime += 10;
		console.log('the time of the video is' + video.currentTime);
	}
	
})

// styled function old school

document.querySelector("#vintage").addEventListener('click', function(){
	var root = document.querySelector( '#player1' ); // '0' to assign the first (and only `HTML` tag)
	root.setAttribute( 'class', 'oldSchool' );
	console.log(root)
})

// styled function original

document.querySelector("#orig").addEventListener('click', function(){
	var root = document.querySelector( '#player1' ); // '0' to assign the first (and only `HTML` tag)
	root.setAttribute( 'class', 'video' );
	console.log(root)
})

// update volume slider

document.querySelector('#slider').addEventListener('click', function(){
	// following two lines update the volume percentage shown ONLY WHEN play buttom is clicked again
	var vol = document.getElementById('slider').value;
	document.getElementById('volume').innerHTML = vol + '%';
})



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



// function audio(){
// 	// let audio = new Audio("assets/band.vtt");

// 	// let volume = document.querySelector("#slider");
// 	// volume.addEventListener("input", function(e) {
// 	// audio.volume = e.currentTarget.value / 100;
// })
// }


