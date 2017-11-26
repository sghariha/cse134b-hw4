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

function addplayer() {
  window.location = "create-player.html";
  return false;
}

function displayedit(element) {
  var num = element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  localStorage.setItem("editplayer", num);
  window.location = "edit-player.html";
  return false;
}

function deleteplayer(element) {
  var num = element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  console.log(num);
  localStorage.removeItem("playernumber" + num);
  localStorage.removeItem("firstname" + num);
  localStorage.removeItem("lastname" + num);
  localStorage.removeItem("position" + num);
  localStorage.removeItem("status" + num);
  localStorage.removeItem("dob" + num);
  localStorage.removeItem("feet" + num);
  localStorage.removeItem("inches" + num);
  localStorage.removeItem("weight" + num);

  for(var i = 1; i <= parseInt(localStorage.getItem("playercount"), 10); i++) {
    if(i > parseInt(num, 10)) {
      console.log(i);

      var index = i - 1;
      localStorage.setItem("playernumber" + index.toString(), index.toString());
      localStorage.setItem("firstname" + index.toString(), localStorage.getItem("firstname" + i.toString()));
      localStorage.setItem("lastname" + index.toString(), localStorage.getItem("lastname" + i.toString()));
      localStorage.setItem("position" + index.toString(), localStorage.getItem("position" + i.toString()));
      localStorage.setItem("status" + index.toString(), localStorage.getItem("status" + i.toString()));
      localStorage.setItem("dob" + index.toString(), localStorage.getItem("dob" + i.toString()));
      localStorage.setItem("feet" + index.toString(), localStorage.getItem("feet" + i.toString()));
      localStorage.setItem("inches" + index.toString(), localStorage.getItem("inches" + i.toString()));
      localStorage.setItem("weight" + index.toString(), localStorage.getItem("weight" + i.toString()));
      if(i === parseInt(localStorage.getItem("playercount"), 10)) {
        localStorage.removeItem("playernumber" + i);
        localStorage.removeItem("firstname" + i);
        localStorage.removeItem("lastname" + i);
        localStorage.removeItem("position" + i);
        localStorage.removeItem("status" + i);
        localStorage.removeItem("dob" + i);
        localStorage.removeItem("feet" + i);
        localStorage.removeItem("inches" + i);
        localStorage.removeItem("weight" + i);
      }
    }
  }
  var total = parseInt(localStorage.getItem("playercount"), 10);
  total = total - 1;
  localStorage.setItem("playercount", total.toString());
  location.reload();
  return false;
}

function displayprofile(element) {
  var num = element.parentElement.previousElementSibling.innerHTML;
  if(element.parentElement.parentElement.parentElement.nextElementSibling.style.display === 'none') {
    element.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'block';
  }
  else {
    element.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'none';
  }
}