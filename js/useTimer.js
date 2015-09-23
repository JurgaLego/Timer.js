function initTimer(id) {
	Timer.init(id);
	document.getElementById('start').addEventListener('click', Timer.start);
	document.getElementById('stop').addEventListener('click', Timer.stop);
	document.getElementById('resume').addEventListener('click', Timer.resume);
	document.getElementById('reset').addEventListener('click', Timer.reset);

}