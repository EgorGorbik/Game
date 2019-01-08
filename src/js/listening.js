import {wizard_ang, monster_ang} from './canvas';
var arr = ['cat', 'dog', 'car', 'school', 'pencil', 'boy', 'girl'];
var word = require('./vocabulary').word;
var translation = require('./vocabulary').translation;
document.getElementById('listening').onclick = function() {
    var j = Math.floor(Math.random() * 7) + 0;
    var audio2 = new Audio('../audio/listening/listening' + j + '.mp3');
            audio2.play();
    document.getElementById('select-task').style.display = "none";
    showPrompt("Напиши, что услышал", function(value) {
      value = value.toLowerCase();
        var flag = true;
            if (value == arr[j]) {wizard_ang(); flag = false}
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
    var form = document.getElementById('listening-form');
    var container = document.getElementById('listening-container');
    document.getElementById('listening-message').innerHTML = text;
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
