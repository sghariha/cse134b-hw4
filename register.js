document.addEventListener('DOMContentLoaded', function() {	
    document.getElementById('existing-team-signup').style.display = "block";
	document.getElementById('new-team-signup').style.display = "none";
	document.getElementById('mySelect').value = "player";
});

function change(obj) {
	var select = obj;
	var selected = select.options[select.selectedIndex].value;

	if(selected === "player" || selected === "admin-existing-team") {
		document.getElementById('existing-team-signup').style.display = "block";
		document.getElementById('new-team-signup').style.display = "none";
	}
	else {
		document.getElementById('existing-team-signup').style.display = "none";
		document.getElementById('new-team-signup').style.display = "block";
	}
}

function register() {
	var storage = false;
	var selected = document.getElementById("mySelect").value;
	if(typeof(Storage) !== "undefined") {
		storage = true;
	}
	if(storage === true) {
		localStorage.setItem("username", document.getElementById("username").value);
		localStorage.setItem("email", document.getElementById("email").value);
		localStorage.setItem("password", document.getElementById("password").value);
		if(selected === "player") {
			localStorage.setItem("accounttype", "player");
			localStorage.setItem("team", document.getElementById("team-existing").value);
		}
		else if(selected === "admin-new-team") {
			localStorage.setItem("accounttype", "admin");
			localStorage.setItem("team", document.getElementById("team-new").value);
		}
		else {
			localStorage.setItem("accounttype", "admin");
			localStorage.setItem("team", document.getElementById("team-existing").value);
		}
	}
	window.location = "login.html"
	return false;
}