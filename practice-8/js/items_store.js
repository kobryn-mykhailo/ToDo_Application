function save(item) {
	var itemsToDoArray = getStoreArray("itemsToDo");
	itemsToDoArray.push(item);
	localStorage.setItem("itemsToDo", JSON.stringify(itemsToDoArray));
}

function loadItemsToDo() {
	var itemsToDoArray = getSavedItems();
	var ol = document.getElementById("itemsToDo");
	if (itemsToDoArray != null) {
		for (var k = 0; k < itemsToDoArray.length; k++) {
			var li = document.createElement("li");
			var i = document.createElement("i");
			i.setAttribute("class", "fa fa-times")
			li.innerHTML = itemsToDoArray[k];
			var key = Math.random();
			li.setAttribute("id", key);
			ol.appendChild(li);
			li.appendChild(i);
			i.addEventListener("click", remove, false);
		}
	}
}
function remove(e) {
	var liElement = document.getElementById(key);
	var key = e.target.parentNode.id;
	// alert(key);
	localStorage.removeItem(key);
	var itemsToDo = getStoreArray();
	if (itemsToDo) {
		for (var i = 0; i < itemsToDo.length; i++) {
			if (key == itemsToDo[i]) {
				itemsToDo[i].splice(i, 1);
			}
		}
		localStorage.setItem("itemsToDo", JSON.stringify(itemsToDo));
		removeItemFromDOM(key);
	}
}

function removeItemFromDOM(key) {
	var item = document.getElementById(key);
	item.parentNode.removeChild(item);
}

function getSavedItems() {
	return getStoreArray("itemsToDo");
}

function getStoreArray(key) {
	var itemsToDoArray = localStorage.getItem(key);
	if (itemsToDoArray == null || itemsToDoArray == "") {
		itemsToDoArray = new Array();
	} else {
		itemsToDoArray = JSON.parse(itemsToDoArray);
	}
	return itemsToDoArray;
}