var playerList = document.getElementById('cont');
var count = 0;

if(localStorage.getItem("playercount")) {
  count = parseInt(localStorage.getItem("playercount"), 10);
}

for (var i = 1; i <= count; i++) {
  var tmpl = document.getElementById('playerrow').content.cloneNode(true);
  tmpl.querySelector('.playernumber').innerHTML = localStorage.getItem("playernumber" + i.toString());
  tmpl.querySelector('.playername').innerHTML = localStorage.getItem("firstname" + i.toString()) + " " + 
  localStorage.getItem("lastname" + i.toString());
  tmpl.querySelector('.playerposition').innerHTML = localStorage.getItem("position" + i.toString());
  tmpl.querySelector('.playerheight').innerHTML = localStorage.getItem("feet" + i.toString()) + " " + localStorage.getItem("inches" + i.toString());
  tmpl.querySelector('.playerweight').innerHTML = localStorage.getItem("weight" + i.toString());
  playerList.appendChild(tmpl);
}

function displayedit(element) {
  var num = element.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
  localStorage.setItem("editplayer", num.innerHTML);
  window.location = "edit-player.html";
  return false;
}