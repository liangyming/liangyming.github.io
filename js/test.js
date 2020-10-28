var way = 1;

function change() {
	if (way == 1) {
		body.style.backgroundImage = "url(img/yuzhou.jpg)";
		way = (way+1)%3;
	} else if(way == 2){
		body.style.backgroundImage = "url(img/xingkong.jpg)";
		way = (way+1)%3;
	}else{
		body.style.backgroundImage = "url(img/0101.gif)";
		way = (way+1)%3;
	}
}

window.οnlοad = function() {
	var screenW = document.body.clientWidth;
	var ratio = screenW / 1766;
	var img = document.getElementById("topImg");
	img.style.height = ratio * 635 + "px";
	window.οnresize = function() {
		screenW = document.body.clientWidth;
		ratio = screenW / 1766;
		img.style.height = ratio * 635 + "px";
	}
}
