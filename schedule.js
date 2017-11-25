$(function() {
  $('#stats-edit').click(function() {
    $('.right').addClass('col-8');
    $('.right').removeClass('col-10');

    var elements = document.getElementsByClassName('hidden');
    for(var i=0; i < elements.length; i++) {
      elements[i].style.display = 'inline-flex';
    }

    var elements2 = document.getElementsByClassName('visable');
    for(var i=0; i<elements2.length; i++) {
      elements2[i].style.display = 'none';
    }
    return false;
  })
});

$(function() {
  $('#stats-done').click(function() {
    $('.right').addClass('col-10');
    $('.right').removeClass('col-8');

    var elements = document.getElementsByClassName('hidden');
    for(var i=0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }

    var elements2 = document.getElementsByClassName('visable');
    for(var i=0; i<elements2.length; i++) {
      elements2[i].style.display = 'inline-flex';
    }
    return false;
  })
});
