toggleMenu();

function toggleMenu() {
	var button = document.getElementById("menu-nav");
	var menu = document.getElementById("menu");

	button.addEventListener("click", function(){
		menu.classList.toggle("menu-toggle");
		button.textContent = "X";

		if (menu.className == "menu-toggle") {
			button.textContent = "T";
		}
	});
}

// ******************************
// Keep label up
// when lose focus
// pure JS
// working but implemented same
// using jQuery
// ******************************

// function labelKeeper() {
// 	var inputs = document.querySelectorAll("input");

// 	for (i=0; i < (inputs.length - 1); i++) {
// 		inputs[i].addEventListener("focusout", function(){
// 			var textValue = this.value;

// 			if (textValue != "") {
// 				this.classList.add("has-value");
// 			} else {
// 				this.classList.remove("has-value");
// 			}
// 		});
// 	}	
// }