	// loadItemsToDo();
	var button = document.getElementById("addButton");
	button.addEventListener("click", bottonOn, false);
	var button2 = document.getElementById("secondButton");
	var input = document.getElementById("textItem");
	var input2 = document.getElementById("content");
	input2.addEventListener("keyup", disable, false);
	input.addEventListener("keyup", disable1, false);
	input.addEventListener("click", disable1, false);
//CLICK ON BUTTON AND ADD THE ITEM
function bottonOn() {
	var item = document.getElementById("textItem");
	var job = item.value;
	if (job == "") {
		alert ("Please, enter an item to do");
	} else {
		var li = document.createElement("li");
		var ol = document.getElementById("itemsToDo");
		var iElement = document.createElement("i");
		li.innerHTML = job;
		li.addEventListener("click", popup, false); //to call popup
   		var currentDate = new Date();
   		var key = currentDate.getTime();
		li.setAttribute("id", key);
		li.setAttribute("data-toggle", "modal");
		li.setAttribute("data-target", "#modal-1");
		ol.appendChild(li);
		li.appendChild(iElement);
		cross();
		localRemove();
		save(key, job) // function to save key and value to the local storage

	};
}
//ADDING THE CROSS (x) AND DELETING ON IT'S CLICK
function cross() {
	var nodeList = document.getElementsByTagName("i");
	var i;
	for (i = 0; i < nodeList.length; i++) {
		nodeList[i].setAttribute("class", "fa fa-times");
		nodeList[i].onclick = removeParent;
			function removeParent(evt) {
			evt.stopPropagation();
			evt.target.parentNode.remove();
		}	
	}
};
//Pull text from li-element into form 2 and push it back after click on button
function popup(e) {
	var content = document.getElementById("content");
		content.value = e.target.innerText;
		button2.addEventListener("click", secondButtonOn, false);
		e.target.classList.add("toEdit");
		function secondButtonOn(ev) {
			if (content.value.onchange = true) {
				var newItem = document.getElementsByClassName("toEdit")[0];
				newItem.innerHTML = content.value + "<i></i>";
				var nodeList = document.getElementsByTagName("i");
				var i;
				for (i = 0; i < nodeList.length; i++) {
				nodeList[i].setAttribute("class", "fa fa-times");
				nodeList[i].onclick = removeParent;
					function removeParent(evt) {
					evt.stopPropagation();
					evt.target.parentNode.remove();
				}	
			}
		}
		e.target.classList.remove("toEdit");
	}
};
//DISABLE BUTTON-1 IF INPUT IS EMPTY
function disable1() {
	if(input.value.length == 0) {
	    button.disabled = true;
	} else if (input.value.length > 0) {
	    button.disabled = false;
	}
};
//DISABLE BUTTON-2 (popup-button) IF INPUT IS EMPTY
function disable() {
	if(input2.value.length == 0) {
	    button2.disabled = true;
	} else if (input2.value.length > 0) {
	    button2.disabled = false;
	}
};






