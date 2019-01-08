import {wizard_ang, monster_ang} from './canvas';

document.getElementById('math').onclick = function() {
    var a = Math.floor(Math.random() * 9) + 0;
    var signs = ['+', '-', '*', '/'];
    var b = signs[Math.floor(Math.random() * 3) + 0];
    var c = Math.floor(Math.random() * 9) + 0;
    document.getElementsByTagName('p')[0].innerHTML = a;
    document.getElementsByTagName('p')[1].innerHTML = b;
    document.getElementsByTagName('p')[2].innerHTML = c;
    document.getElementById('select-task').style.display = "none";
    showPrompt("Что получится?", function(value) {
       
       
        document.getElementById('select-task').style.display = "none";
        if(b == "+") {
            if (value == a + c) {
                wizard_ang()
            }
            else monster_ang();
        } 
        if(b == "-") {
            if (value == a - c) wizard_ang()
            else monster_ang();
        }
        if(b == "*") {
            if (value == a * c) wizard_ang()
            else monster_ang();
        }
        if(b == "/") {
            if (value == a / c) wizard_ang()
            else monster_ang();
        }
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
    var form = document.getElementById('math-form');
    var container = document.getElementById('math-container');
    document.getElementById('math-message').innerHTML = text;
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
