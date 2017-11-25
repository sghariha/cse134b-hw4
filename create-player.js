function addplayer() {
	var storage = false;
	if(typeof(Storage) !== "undefined") {
		storage = true;
	}
	if(storage === true) {
		if(document.getElementById("firstname").value && document.getElementById("lastname").value && 
			document.getElementById("dob").value && document.getElementById("feet").value && 
			document.getElementById("inches").value && document.getElementById("weight").value && 
			document.getElementById("profilepic").value) {

			if(!localStorage.getItem("playercount")) {
				localStorage.setItem("playercount", "0");
			}
			count = localStorage.getItem("playercount");
			newcount = parseInt(count, 10) + 1;
			console.log(newcount);
			localStorage.setItem("playercount", newcount.toString());
			localStorage.setItem("playernumber" + newcount.toString(), newcount.toString());
			localStorage.setItem("firstname" + newcount.toString(), document.getElementById("firstname").value);
			localStorage.setItem("lastname" + newcount.toString(), document.getElementById("lastname").value);
			localStorage.setItem("position" + newcount.toString(), document.getElementById("position").value);
			localStorage.setItem("status" + newcount.toString(), document.getElementById("status").value);
			localStorage.setItem("dob" + newcount.toString(), document.getElementById("dob").value);
			localStorage.setItem("feet" + newcount.toString(), document.getElementById("feet").value + "'");
			localStorage.setItem("inches" + newcount.toString(), document.getElementById("inches").value + "\"");
			localStorage.setItem("weight" + newcount.toString(), document.getElementById("weight").value + " lbs");
			localStorage.setItem("display" + newcount.toString(), "false");
			}
		else {
			document.getElementById("warning").innerHTML = "Please enter all fields!";
			return false;
		}
		window.location = "roster-admin.html";
		return false;
	}
}