toggleMenu();

function toggleMenu() {
	var button = document.getElementById("menu-nav");
	var menu = document.getElementById("menu");

	button.addEventListener("click", function(){
		menu.classList.toggle("menu-toggle");
	})
}