var storage = false;
	if(typeof(Storage) !== "undefined") {
		storage = true;
	}
	if(storage === true) {
		var num = localStorage.getItem("editplayer")
		document.getElementById("firstname").value = localStorage.getItem("firstname" + num);
		document.getElementById("lastname").value = localStorage.getItem("lastname" + num);
		document.getElementById("position").value = localStorage.getItem("position" + num);
		document.getElementById("status").value = localStorage.getItem("status" + num);
		document.getElementById("dob").value = localStorage.getItem("dob" + num);
		document.getElementById("feet").value = parseInt(localStorage.getItem("feet" + num), 10);
		document.getElementById("inches").value = parseInt(localStorage.getItem("inches" + num), 10);
		document.getElementById("weight").value = parseInt(localStorage.getItem("weight" + num), 10);
	}

function editplayer() {
	var storage = false;
	if(typeof(Storage) !== "undefined") {
		storage = true;
	}
	if(storage === true) {
		if(document.getElementById("firstname").value && document.getElementById("lastname").value && 
			document.getElementById("dob").value && document.getElementById("feet").value && 
			document.getElementById("inches").value && document.getElementById("weight").value && 
			document.getElementById("profilepic").value) {

			var num = localStorage.getItem("editplayer")
			localStorage.setItem("firstname" + num, document.getElementById("firstname").value);
			localStorage.setItem("lastname" + num, document.getElementById("lastname").value);
			localStorage.setItem("position" + num, document.getElementById("position").value);
			localStorage.setItem("status" + num, document.getElementById("status").value);
			localStorage.setItem("dob" + num, document.getElementById("dob").value);
			localStorage.setItem("feet" + num, document.getElementById("feet").value + "'");
			localStorage.setItem("inches" + num, document.getElementById("inches").value + "\"");
			localStorage.setItem("weight" + num, document.getElementById("weight").value + " lbs");
			}
		else {
			document.getElementById("warning").innerHTML = "Please enter all fields!";
			return false;
		}
		window.location = "roster-admin.html";
		return false;
	}
}