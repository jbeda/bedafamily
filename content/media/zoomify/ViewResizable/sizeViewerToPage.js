
function windowOpen(filename,windowname,properties) {
    mywindow = window.open(filename,windowname,properties);
}


//-----------------reset size----------------------

var screenWidth = 0;
var screenHeight = 0;
var viewerWidth = 0;
var viewerHeight = 0;
var BorderType = '';
var resizeSkipTimer = null;
var textHeaderH = 70;

function getWindowSize() {
	if (typeof(window.innerWidth ) == 'number') {
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight;
	} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		screenWidth = document.documentElement.clientWidth;
		screenHeight = document.documentElement.clientHeight;
	} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
		screenWidth = document.body.clientWidth;
		screenHeight = document.body.clientHeight;
	} else {
		getScreenSize();
	}
}

function getScreenSize() {
	if (self.screen) {
		screenWidth = screen.width;
		screenHeight = screen.height;
	} else if (self.java) {
		dtk = java.awt.Toolkit.getDefaultToolkit();
		ss = dtk.getScreenSize();
		screenWidth = ss.width;
		screenHeight = ss.height;
	} else if (self.theBody) {
		screenWidth = theBody.offsetWidth;
		screenHeight = theBody.offsetHeight;
	} else {
		screenWidth = 800;
		screenHeight = 600;
	}
}

function resizeTest() {
	window.clearTimeout(resizeSkipTimer);
	resizeSkipTimer = window.setTimeout(resizeViewer, 500);
}

function resizeViewer () {
	resetSize(90);
	Z.Viewer.setSizeAndPosition(viewerWidth, (viewerHeight - textHeaderH), 0, 0, true);
	var zMyContainer = document.getElementById("myContainer"); 
	var zMyContainerS = zMyContainer.style;
	zMyContainerS.width = viewerWidth + "px";
	zMyContainerS.height = viewerHeight + "px";
}

function resetSize(percent) {
  	getWindowSize();
  	if (percent > 90) { percent = 90; }
  	tempWidth = Math.round(screenWidth * percent / 100);
	tempHeight = Math.round(screenHeight * percent / 100);
	viewerWidth = tempWidth;
	viewerHeight = tempHeight;
}
