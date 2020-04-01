var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonArr = document.querySelectorAll(".close");
var startItems = ["Notebook","Jello","Spinach","Rice","Birthday Cake","Candles"];

startItems.forEach(function(i){
	createListElement(i);
})

function inputLength() {
	return input.value.length;
}

function createListElement(starter) {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.classList.add("close");
	button.addEventListener("click",function(){
		var closeLI = button.parentElement;
		var children = ul.children;
		var index = -1;
		var length = children.length;
		for(var i = 0 ; i < length ; i++){
			if(children[i] === closeLI){
				index = i;
			}
		}
		ul.removeChild(ul.childNodes[index+1]);
	});
	var userin = input.value;
	var text;
	if(starter){
		text = document.createTextNode(starter);
	}else{
		text = document.createTextNode(userin);
	}
	li.appendChild(text);
	li.appendChild(button);
	li.addEventListener("click",function(){
		li.classList.toggle("done");
	})
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement(false);
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement(false);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



