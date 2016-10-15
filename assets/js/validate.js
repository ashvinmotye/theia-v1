// selecting all inputs
	// from sign-in form
	var username = document.forms["sign-in-form"]["username"];
	var userPassword = document.forms["sign-in-form"]["user-pass"];

	// from sign-up form
	var fullname = document.forms["sign-up-form"]["fullname"];
	var newUsername = document.forms["sign-up-form"]["new-user"];
	var newPass = document.forms["sign-up-form"]["new-pass"];
	var confirmPass = document.forms["sign-up-form"]["confirm-pass"];

// selecting all alerts
	// from sign-in form
	var usernameAlert = document.getElementById("username-alert");
	var passAlert = document.getElementById("pass-alert");

	// from sign-up form
	var fullnameAlert = document.getElementById("name-alert");
	var newUserAlert = document.getElementById("new-user-alert");
	var newPassAlert = document.getElementById("new-pass-alert");

// event listeners to the input fields
username.addEventListener("blur", usernameValidate, true);
userPassword.addEventListener("blur", userPassValidate, true);
fullname.addEventListener("blur", fullnameValidate, true);
newUsername.addEventListener("blur", newUsernameValidate, true);
newPass.addEventListener("blur", newPassValidate, true);

// validation function
// validateIn
function validateIn() {
	// in-form username
	if (username.value == "") {
		usernameAlert.textContent = "Username is required.";
		username.focus();
		return false;
	}

	// in-form password
	if (userPassword.value == "") {
		passAlert.textContent = "Password is required.";
		userPassword.focus();
		return false;
	}

	// check length of password
	if (userPassword.value.length < 8) {
		passAlert.textContent = "8 or more characters."
		userPassword.focus();
		return false;
	}
}

// validateUp
function validateUp() {
	// up-form fullname
	if (fullname.value == "") {
		fullnameAlert.textContent = "Full name is required.";
		fullname.focus();
		return false;
	}

	// up-form new username
	if (newUsername.value == "") {
		newUserAlert.textContent = "Username is required.";
		newUsername.focus();
		return false;
	}

	// up-form password
	if (newPass.value == "") {
		newPassAlert.textContent = "Password is required.";
		newPass.focus();
		return false;
	}

	// check length of new password
	if (newPass.value.length < 8) {
		newPassAlert.textContent = "8 or more characters.";
		newPass.focus();
		return false;
	}

	// check is passwords match
	if (newPass.value != confirmPass.value) {
		newPassAlert.textContent = "Passwords do not match.";
		newPass.focus();
		return false;
	}
}

// event handlers
// in-form
	// in-form username
	function usernameValidate() {
		if (username.value != "") {
			usernameAlert.innerHTML = "";
			return true;
		}
	}

	// in-form password
	function userPassValidate() {
		if (userPassword.value != "") {
			passAlert.innerHTML = "";
			return true;
		}
	}

// up-form
	// up-form fullname
	function fullnameValidate() {
		if (fullname.value != "") {
			fullnameAlert.innerHTML = "";
			return true;
		}
	}

	// up-form username
	function newUsernameValidate() {
		if (newUsername.value != "") {
			newUserAlert.innerHTML = "";
			return true;
		}
	}

	// up-form password
	function newPassValidate() {
		if (newPass.value != "") {
			newPassAlert.innerHTML = "";
			return true;
		}
	}