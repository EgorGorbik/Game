document.getElementById('ok').onclick = function() {
    showPrompt("Выбери", function(value) {
    
       // document.getElementsByTagName('p')[0].innerHTML = value;
        alert(value);
      });
}




function showCover() {
    var coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.appendChild(coverDiv);
  }

  function hideCover() {
    document.body.removeChild(document.getElementById('cover-div'));
  }

  function showPrompt(text, callback) {
    showCover();
    var form = document.getElementById('select-form');
    var container = document.getElementById('select-task');
    document.getElementById('select-message').innerHTML = text;
    //form.elements.text.value = '';

    function complete(value) {
      hideCover();
      container.style.display = 'none';
      document.onkeydown = null;
      callback(value);
    }

    form.onsubmit = function() {
      var value = form.elements.text.value;
      if (value == '') return false; // игнорировать пустой submit
     //select();
     
      complete(value);
      return false;
    };

   

    document.onkeydown = function(e) {
      if (e.keyCode == 27) { // escape
        complete(null);
      }
    };

    var lastElem = form.elements[form.elements.length - 1];
    var firstElem = form.elements[0];

    lastElem.onkeydown = function(e) {
      if (e.keyCode == 9 && !e.shiftKey) {
        firstElem.focus();
        return false;
      }
    };

    firstElem.onkeydown = function(e) {
      if (e.keyCode == 9 && e.shiftKey) {
        lastElem.focus();
        return false;
      }
    };


    container.style.display = 'block';
   
  }

 
    

  