init();

function init() {
	var username = document.querySelector("input[name=username]");
	var newUser = document.querySelector("input[name=new-user]");
	var msgIn = document.getElementById("in-alert");
	var msgUp = document.getElementById("up-alert");

	var fullName = document.querySelector("input[name=fullname]");

	var pass1 = document.querySelector("input[name=user-pass]")
	var pass2 = document.querySelector("input[name=new-pass]")
	var pass3 = document.querySelector("input[name=confirm-pass]")

	validateEmail();
	validateUser(username, msgIn);
	validateUser(newUser, msgUp);
	validateName(fullName, msgUp);
	validatePassword(pass1, msgIn);
	validatePassword(pass2, msgUp);
	validatePassword(pass3, msgUp);
	checkPassword(pass2, pass3, msgUp);
	allValidate();
}

// ***********************************
// USERNAME VALIDATION
// ***********************************
function validateUser(userField, alertMsg) {
	userField.addEventListener("keyup", function(){
		var validChars = /^[0-9a-zA-Z_]+$/;
		if (userField.value.match(validChars)) {
			alertMsg.innerHTML = "";
		} else {
			alertMsg.innerHTML = "Username must contain <br> only alphanumeric characters."
		}
	});

	userField.addEventListener("blur", function(){
		if (userField.value == "") {
			alertMsg.textContent = "";
		}
	});
}

// ***********************************
// FULLNAME VALIDATION
// ***********************************
function validateName(fullName, alertMsg) {
	fullName.addEventListener("keyup", function(){
		var validChars = /^[a-zA-Z]+$/;
		if (fullName.value.match(validChars)) {
			alertMsg.textContent = "";
		} else {
			alertMsg.textContent = "Please use only letters.";
		}
	});

	fullName.addEventListener("blur", function(){
		if (fullName.value == "") {
			alertMsg.textContent = "";
		}
	});
}

// ***********************************
// PASSWORD VALIDATION
// ***********************************
function validatePassword (pass, alertMsg) {
	pass.addEventListener("keyup", function(){
		if (pass.value.length < 8) {
			alertMsg.textContent = "Use 8 or more characters.";
		} else {
			alertMsg.textContent = "";
		}
	});

	pass.addEventListener("blur", function(){
		if (pass.value == "") {
			alertMsg.textContent = "";
		}
	});
}

// ***********************************
// PASSWORD CHECK
// ***********************************
function checkPassword(a, b, alertMsg) {
	b.addEventListener("blur", function(){
		if (a.value == b.value) {
			alertMsg.textContent = "";
		} else {
			alertMsg.textContent = "Passwords do not match.";
		}
	});
}

// ***********************************
// ALL VALIDATE
// ***********************************
function allValidate() {
	var input = document.querySelectorAll("input");
	var alertMsg = document.querySelectorAll("span.alert");
	var btn2 = document.getElementById("submit-up");

	// Sign in form
	input[1].addEventListener("blur", function(){
		var val0 = input[0].className;
		var val1 = input[1].className;
		var val6 = alertMsg[0].textContent;
		var btn1 = document.getElementById("submit-in");

		if (val0 == "has-value" && val1 == "has-value" && val6 == "") {
			btn1.classList.remove("disable");
		}
	});

	// Sign up form
	input[5].addEventListener("blur", function(){
		var val2 = input[2].className;
		var val3 = input[3].className;
		var val4 = input[4].className;
		var val5 = input[5].className;	
		var val7 = alertMsg[1].textContent;

		if (val2 == "has-value" && val3 == "has-value" && val4 == "has-value" && val5 == "has-value" && val7 == "") {
			btn2.classList.remove("disable");
		}
	});
}

// ***********************************
// EMAIL VALIDATION
// ***********************************
function validateEmail() {
	// selecting the needed elements
	// and storing in variables
	var email = document.querySelector("input[name=email]");
	var msg = document.getElementById("email-alert");
	var button = document.querySelector("button.subscribe");

	// Adding event listener to the email input
	// keyup event is fired
	// when a key is released
	// calling the function emailValidate()

	// blur is fired when input has lost focus
	// calling an anonymous function
	email.addEventListener("keyup", emailValidate);
	email.addEventListener("blur", function(){
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
}