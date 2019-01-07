import {wizard_ang, monster_ang} from './canvas';

var word = require('./vocabulary').word;
var translation = require('./vocabulary').translation;
document.getElementById('translate').onclick = function() {
    var index = Math.floor(Math.random() * 2) + 0;
    document.getElementsByTagName('p')[4].innerHTML = word[index];
    document.getElementById('select-task').style.display = "none";
    showPrompt("Переведи", function(value) {
       
        var flag = true;
        for(var i = 0 ; i < translation[index].length; i++) {
            if (value == translation[index][i]) {wizard_ang(); flag = false}
        }
        if (flag == true) monster_ang();
        document.getElementById('select-task').style.display = "none";
        
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
    var form = document.getElementById('translate-form');
    var container = document.getElementById('translate-container');
    document.getElementById('translate-message').innerHTML = text;
    form.elements.text.value = '';

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

    form.elements.cancel.onclick = function() {
      complete(null);
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
    form.elements.text.focus();
  }
