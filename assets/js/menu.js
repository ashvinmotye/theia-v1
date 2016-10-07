toggleMenu();

function toggleMenu() {
	var button = document.getElementById("menu-nav");
	var menu = document.getElementById("menu");
	var bar1 = document.getElementById("bar1");
	var bar2 = document.getElementById("bar2");
	var bar3 = document.getElementById("bar3");

	button.addEventListener("click", function(){
		menu.classList.toggle("menu-toggle");
		bar1.classList.toggle("close");
		bar2.classList.toggle("close");
		bar3.classList.toggle("close");

		if (menu.className != "menu-toggle") {
			button.style.backgroundColor = "#DDDCDC";
		} else {
			button.style.backgroundColor = "#247EB4";
		}
	});
}