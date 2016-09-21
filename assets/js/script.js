toggleMenu();

function toggleMenu() {
	var button = document.getElementById("menu-nav");
	var menu = document.getElementById("menu");

	button.addEventListener("click", function(){
		menu.classList.toggle("menu-toggle");
		button.textContent = "X";

		if (menu.className == "menu-toggle") {
			button.textContent = "T"
		}
	});
}