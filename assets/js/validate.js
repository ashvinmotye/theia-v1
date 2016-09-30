// selecting the needed elements
// and storing in variables
var email = document.querySelector("input[type=email]");
var msg = document.getElementById("email-alert");
var button = document.querySelector("button.subscribe");

// Adding event listener to the email input
// keyup event is fired
// when a key is released
// calling the function emailValidate()

// blur is fired when input has lost focus
// but not filled
// focus is fired when input has received focus
// calling an anonymous functions
email.addEventListener("keyup", emailValidate);
email.addEventListener("blur", function(){
	if (email.value == "") {
		msg.textContent = "Please enter an email address.";
	}		
});
email.addEventListener("focus", function(){
	if (email.value == "") {
		msg.textContent = "";
	}
});

// Declarating of emailValidate()
function emailValidate() {
	// Initialising local variables
	var input = email.value;
	var numChars = input.length;
	var at = input.match(/@/g);
	var atPosition = input.indexOf("@");

	// Regular expressions stored in variables
	var letterNumber = /^[0-9a-zA-Z_]+$/;
	var letter =  /^[a-zA-Z]+$/;
	var validChars = /^[a-zA-Z0-9_.]+\@[a-zA-z0-9_.-]+\.[a-zA-Z]+$/;

	// Check if input begins with letter, number or underscore
	if (input == "" || input[0].match(letterNumber)) {
		// Check if only one @ symbol is present
		// Involves no @ symbol at all
		// and more than one @ symbol
		if (at == null) {
			msg.textContent = "Please enter a valid email address.";
			button.classList.add("disable");
		} else if (atPosition != input.lastIndexOf("@")) {
			msg.textContent = "You cannot use more than one @ symbol.";
			button.classList.add("disable");
		} else {
			// Check for valid domain name
			// Done by checking is last dot is 
			// at least two characters away from @ symbol
			if (input.charAt(atPosition+1) == "." || input.charAt(atPosition+2) == ".") {
				msg.textContent = "Must have . at least two letters away from @";
				button.classList.add("disable");
			} else {
				// Check if input is ending with a letter
				if (input == "" || input[numChars-1].match(letter)) {
					// Once ends with a letter, check for validity of whole email
					// Involves matching with a regular expression
					// with allowed characters for email
					if (input.match(validChars) == null) {
						msg.textContent = "Your email address is invalid.";
						button.classList.add("disable");
					} else {
						msg.textContent = "";
						button.classList.remove("disable");
					}
				} else {
				msg.textContent = "Please enter a valid email address.";
				button.classList.add("disable");
				}
			}
		}		
	} else {
		msg.textContent = "Please begin with letter, number or underscore.";
		button.classList.add("disable");
	}
}