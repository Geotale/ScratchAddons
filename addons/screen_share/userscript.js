var inject_script = document.createElement("script");
inject_script.innerHTML = `
(function(){
	var oldGetUserMedia = window.navigator.mediaDevices.getUserMedia;
	window.navigator.mediaDevices.getUserMedia = function(){
		console.log(arguments);
		if(window.confirm("Scratch is requesting to use your camera.\\nWould you like to screenshare instead of using your camera?"))
			return window.navigator.mediaDevices.getDisplayMedia.call(this, arguments);
		else
			return oldGetUserMedia.call(this, arguments[0])
	};
	window.navigator.getUserMedia = navigator.mediaDevices.getUserMedia;
})()
`;
document.body.appendChild(inject_script);
