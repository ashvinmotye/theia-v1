// *******************************************
// Keeping label up when input is not empty
// *******************************************
$(document).ready(function(){
	$('.input-group input').focusout(function() {
    var textValue = $(this).val();

    if (textValue === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });
});

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