// ***************************************
// Show hide blocks with jQuery
// Plus animation
// ***************************************
$(document).ready(function(){
	// show only two feedback on load
	// hide all with class hidden-onload
	$(".hidden-onload").hide();

	// add click event listener to show more button
	// rotate button
	// slide content up and down
	// change text value
	// depending on state
	$("#show-more").on("click", function(){
		$(this).toggleClass("rotate");
		$(".hidden-onload").slideToggle(300);

		if ($(this).hasClass("rotate")) {
			$("img+p").text("Show less");
		} else {
			$("img+p").text("Show more");
		}
	});
});

// ***************************************
// Show hide feedback blocks
// With pure Js
// ***************************************
// var block = document.getElementsByClassName("user-feedback");
// var showMore = document.getElementById("show-more");

// for (var i = 2; i < block.length; i++) {
// 	block[i].classList.add("hide");
// }

// showMore.addEventListener("click", function(){
// 	for (var i = 2; i < block.length; i++) {
// 		block[i].classList.toggle("hide");
// 	}

// 	this.classList.toggle("rotate");
// });