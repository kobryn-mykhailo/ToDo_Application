window.onload = showItems();
function save(key, value) {
	localStorage.setItem(key, value);
}

function showItems() {
	var lsLength = localStorage.length;
	if (lsLength > 0) {
		for (var k = 0; k < lsLength; k++) {
			var key = localStorage.key(k);
			var li = document.createElement("li");
			var ol = document.getElementById("itemsToDo");
			var iElement = document.createElement("i");
			iElement.setAttribute("class", "fa fa-times")
			li.innerHTML = localStorage.getItem(key);
			li.addEventListener("click", popup, false); //to call popup
			li.setAttribute("id", key);
			li.setAttribute("data-toggle", "modal");
			li.setAttribute("data-target", "#modal-1");
			ol.appendChild(li);
			li.appendChild(iElement);
			localRemove();
		}
	}

}

function localRemove() {
	var nodeList = document.getElementsByTagName("i");
	var i;
	for (i = 0; i < nodeList.length; i++) {
		nodeList[i].onclick = removeParent;
		function removeParent(evt) {
			evt.stopPropagation();
			evt.target.parentNode.remove();
			var key = evt.target.parentNode.id;
			localStorage.removeItem(key);
			
		}	
	}
}

function popup(e) {
	var content = document.getElementById("content");
		var key = e.target.id;
		content.value = localStorage.getItem(key);
		button2.addEventListener("click", secondButtonOn, false);
		e.target.classList.add("toEdit");
		function secondButtonOn(ev) {
			if (content.value.onchange = true) {
				var newItem = document.getElementsByClassName("toEdit")[0];
				newItem.innerHTML = content.value + "<i></i>";
				var keys = newItem.id;

				localStorage.removeItem(keys);
				var text = content.value;
				localStorage.setItem(keys, text);
				var nodeList = document.getElementsByTagName("i");
				var i;
				for (i = 0; i < nodeList.length; i++) {
				nodeList[i].setAttribute("class", "fa fa-times");
				nodeList[i].onclick = removeParent;

				e.target.classList.remove("toEdit");
					function removeParent(evt) {
					evt.stopPropagation();
					evt.target.parentNode.remove();	

				}	
			}
		}
		
	}
};