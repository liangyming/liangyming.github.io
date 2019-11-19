var flag = 3
function add(){
	var arr = new Array();
	for (var i = 0; i < 4; i++) {
		arr[i] = document.createElement("th");
	}
	var ttrr = document.createElement("tr");
	var bt = document.createElement("button");
	bt.style.cssText = "background-color: coral;";
	bt.innerHTML = "删除";
	bt.onclick = function(){
		rm(this);
	}
	arr[3].appendChild(bt);
	arr[0].innerHTML = flag;
	flag++;
	arr[1].innerHTML = document.getElementById("in1").value;
	arr[2].innerHTML = document.form.sex.value;
	for (var i = 0; i < 4; i++) {
		ttrr.appendChild(arr[i]);
	}
	document.getElementById("t").appendChild(ttrr);
}

function rm(r){
	var j=r.parentNode.parentNode.rowIndex;
	document.getElementById('t').deleteRow(j);
	var node = document.querySelectorAll("tr");
	for (var i = 0; i < node.length; i++) {
		node[i].childNodes[0].innerHTML = i;
	}
	flag = node.length;
}
