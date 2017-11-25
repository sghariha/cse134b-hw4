$(function() {
  $('#end-time').click(function() {


    var elements = document.getElementsByClassName('hidden');
    for(var i=0; i < elements.length; i++) {
      elements[i].style.display = 'inline';
    }

    var elements2 = document.getElementsByClassName('visable');
    for(var i=0; i < elements.length; i++) {
      elements2[i].style.display = 'none';
    }

    return false;
  })
});


$(function() {
  $('#remove-time').click(function() {
    var elements = document.getElementsByClassName('hidden');
    for(var i=0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }

    var elements2 = document.getElementsByClassName('visable');
    for(var i=0; i < elements.length; i++) {
      elements2[i].style.display = 'inline';
    }
    return false;
  })
});

function changeEvent(obj) {
	var select = obj;
	var selected = select.options[select.selectedIndex].value;

	if(selected === "game") {
		document.getElementById('team-option').style.display = "flex";
		document.getElementById('other-option').style.display = "none";
	}
	else if(selected == "other") {
    document.getElementById('team-option').style.display = "none";
		document.getElementById('other-option').style.display = "flex";
	}
  else {
    document.getElementById('team-option').style.display = "none";
    document.getElementById('other-option').style.display = "none";
  }
}
