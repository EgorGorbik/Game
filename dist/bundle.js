!function(e){var n={};function t(o){if(n[o])return n[o].exports;var d=n[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var d in e)t.d(o,d,function(n){return e[n]}.bind(null,d));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports.word=["cat","dog","car"],e.exports.translation=[["кошка","кот","котик"],["собака","собачка","пёс"],["машина","машинка","автомобиль"]]},function(e,n){!function(e,n){var t;(t=document.createElement("div")).id="cover-div",document.body.appendChild(t);var o=document.getElementById("prompt-form"),d=document.getElementById("prompt-form-container");function l(e){document.body.removeChild(document.getElementById("cover-div")),d.style.display="none",document.onkeydown=null,n(e)}document.getElementById("prompt-message").innerHTML=e,o.onsubmit=function(){var e=o.elements.text.value;return""==e?(document.getElementById("select-task").style.display="none",!1):(l(e),!1)},o.elements.cancel.onclick=function(){l(null)},document.onkeydown=function(e){27==e.keyCode&&l(null)};var c=o.elements[o.elements.length-1],a=o.elements[0];c.onkeydown=function(e){if(9==e.keyCode&&!e.shiftKey)return a.focus(),!1},a.onkeydown=function(e){if(9==e.keyCode&&e.shiftKey)return c.focus(),!1},d.style.display="block",o.elements.text.focus()}("Как тебя зовут?",function(e){console.log(e),document.getElementsByTagName("p")[5].innerHTML=e})},function(e,n){document.getElementsByTagName("p")[6].innerHTML=["злобный","ужасный","страшный","сопливый"][Math.floor(2*Math.random())+0]+" "+["орг","гном","гоблин","монстр"][Math.floor(4*Math.random())+0]+" "+["Володя","Василий","Том","Макс"][Math.floor(4*Math.random())+0]},function(e,n){document.getElementById("ok").onclick=function(){!function(e,n){t=document.createElement("div"),t.id="cover-div",document.body.appendChild(t);var t;var o=document.getElementById("select-form"),d=document.getElementById("select-task");function l(e){document.body.removeChild(document.getElementById("cover-div")),d.style.display="none",document.onkeydown=null,n(e)}document.getElementById("select-message").innerHTML=e,o.onsubmit=function(){var e=o.elements.text.value;return""!=e&&(l(e),!1)},document.onkeydown=function(e){27==e.keyCode&&l(null)};var c=o.elements[o.elements.length-1],a=o.elements[0];c.onkeydown=function(e){if(9==e.keyCode&&!e.shiftKey)return a.focus(),!1},a.onkeydown=function(e){if(9==e.keyCode&&e.shiftKey)return c.focus(),!1},d.style.display="block"}("Выбери",function(e){alert(e)})}},function(e,n,t){"use strict";t.r(n);t(1);var o,d=Math.floor(3*Math.random())+1,l=document.getElementById("positiv_me").offsetWidth,c=document.getElementById("positiv_monster").offsetWidth;function a(e,n,t,o){var d=document.getElementById(e).getContext("2d"),l=100,c=100,a=document.getElementById(n),i=1;setInterval(function(){var e;e=t+i+o,a.onload=function(){l=a.width,c=a.height,d.clearRect(0,0,700,500),d.drawImage(a,0,0,l,c),a.style.display="none"},a.src=e,4==(i+=1)&&(i=1)},200)}function i(e,n,t,o){document.getElementById("canvas").style.display="none",document.getElementById("canvas1").style.position="static";var d=document.getElementById(e).getContext("2d"),l=100,a=100,i=document.getElementById(n),m=1;setInterval(function(){var e;e=t+m+o,i.onload=function(){l=i.width,a=i.height,d.clearRect(0,0,700,500),d.drawImage(i,0,0,l,a),i.style.display="none"},i.src=e,6==(m+=1)&&(document.getElementById("canvas").style.display="block",document.getElementById("canvas1").style.display="none",0!=c&&(document.getElementById("select-task").style.display="block"))},200)}function m(e,n,t,o){document.getElementById("canvas4").style.display="none",document.getElementById("canvas5").style.position="absolute";var d=document.getElementById(e).getContext("2d"),c=100,a=100,i=document.getElementById(n),m=1;setInterval(function(){var e;e=t+m+o,i.onload=function(){c=i.width,a=i.height,d.clearRect(0,0,700,500),d.drawImage(i,0,0,c,a),i.style.display="none"},i.src=e,9==(m+=1)&&(document.getElementById("canvas4").style.display="block",document.getElementById("canvas5").style.display="none",0!=l&&(document.getElementById("select-task").style.display="block"))},200)}function u(){new Audio("../audio/wizard.mp3").play(),document.getElementById("canvas1").style.display="block",i("canvas1","image2","../img/wizard_ang/a",".png"),c-=54,document.getElementById("positiv_monster").style.width=c+"px",0==c&&(a("canvas6","image5","../img//win/win",".png"),document.getElementById("win_message").style.display="block")}function s(){new Audio("../audio/monster.mp3").play(),document.getElementById("canvas5").style.display="block",m("canvas5","image4","../img/monster_ang/g",".png"),l-=54,document.getElementById("positiv_me").style.width=l+"px",0==l&&(a("canvas6","image5","../img/wizard_lose/lose",".png"),document.getElementById("canvas").style.display="none",document.getElementById("canvas6").style.marginLeft="100px",document.getElementById("lose_message").style.display="block")}a("canvas2","left-arm","../img/"+(o=d)+"/arm-left",".png"),a("canvas","image","../img/wizard",".png"),a("canvas3","right-arm","../img/"+o+"/arm-right",".png"),a("canvas4","image3","../img/gun",".png"),console.log(d),document.getElementById("image").style.display="none";t(2),t(3);document.getElementById("math").onclick=function(){var e=Math.floor(9*Math.random())+0,n=["+","-","*","/"][Math.floor(3*Math.random())+0],t=Math.floor(9*Math.random())+0;document.getElementsByTagName("p")[0].innerHTML=e,document.getElementsByTagName("p")[1].innerHTML=n,document.getElementsByTagName("p")[2].innerHTML=t,document.getElementById("select-task").style.display="none",function(e,n){t=document.createElement("div"),t.id="cover-div",document.body.appendChild(t);var t;var o=document.getElementById("math-form"),d=document.getElementById("math-container");function l(e){document.body.removeChild(document.getElementById("cover-div")),d.style.display="none",document.onkeydown=null,n(e)}document.getElementById("math-message").innerHTML=e,o.elements.text.value="",o.onsubmit=function(){var e=o.elements.text.value;return""!=e&&(l(e),!1)},document.onkeydown=function(e){27==e.keyCode&&l(null)};var c=o.elements[o.elements.length-1],a=o.elements[0];c.onkeydown=function(e){if(9==e.keyCode&&!e.shiftKey)return a.focus(),!1},a.onkeydown=function(e){if(9==e.keyCode&&e.shiftKey)return c.focus(),!1},d.style.display="block",o.elements.text.focus()}("Что получится?",function(o){document.getElementById("select-task").style.display="none","+"==n&&(o==e+t?u():s()),"-"==n&&(o==e-t?u():s()),"*"==n&&(o==e*t?u():s()),"/"==n&&(o==e/t?u():s())})};var r=t(0).word,y=t(0).translation;document.getElementById("translate").onclick=function(){var e=Math.floor(2*Math.random())+0;document.getElementsByTagName("p")[4].innerHTML=r[e],document.getElementById("select-task").style.display="none",function(e,n){t=document.createElement("div"),t.id="cover-div",document.body.appendChild(t);var t;var o=document.getElementById("translate-form"),d=document.getElementById("translate-container");function l(e){document.body.removeChild(document.getElementById("cover-div")),d.style.display="none",document.onkeydown=null,n(e)}document.getElementById("translate-message").innerHTML=e,o.elements.text.value="",o.onsubmit=function(){var e=o.elements.text.value;return""!=e&&(l(e),!1)},document.onkeydown=function(e){27==e.keyCode&&l(null)};var c=o.elements[o.elements.length-1],a=o.elements[0];c.onkeydown=function(e){if(9==e.keyCode&&!e.shiftKey)return a.focus(),!1},a.onkeydown=function(e){if(9==e.keyCode&&e.shiftKey)return c.focus(),!1},d.style.display="block",o.elements.text.focus()}("Переведи",function(n){for(var t=!0,o=0;o<y[e].length;o++)n==y[e][o]&&(u(),t=!1);1==t&&s(),document.getElementById("select-task").style.display="none"})};t(0);var f=["cat","dog","car"];t(0).word,t(0).translation;document.getElementById("listening").onclick=function(){var e=Math.floor(2*Math.random())+0;new Audio("../audio/listening/listening"+e+".mp3").play(),document.getElementById("select-task").style.display="none",function(e,n){t=document.createElement("div"),t.id="cover-div",document.body.appendChild(t);var t;var o=document.getElementById("listening-form"),d=document.getElementById("listening-container");function l(e){document.body.removeChild(document.getElementById("cover-div")),d.style.display="none",document.onkeydown=null,n(e)}document.getElementById("listening-message").innerHTML=e,o.elements.text.value="",o.onsubmit=function(){var e=o.elements.text.value;return""!=e&&(l(e),!1)},document.onkeydown=function(e){27==e.keyCode&&l(null)};var c=o.elements[o.elements.length-1],a=o.elements[0];c.onkeydown=function(e){if(9==e.keyCode&&!e.shiftKey)return a.focus(),!1},a.onkeydown=function(e){if(9==e.keyCode&&e.shiftKey)return c.focus(),!1},d.style.display="block",o.elements.text.focus()}("Переведи",function(n){var t=!0;n==f[e]&&(u(),t=!1),1==t&&s(),document.getElementById("select-task").style.display="none"})};t(6),t(11),t(15),t(17),t(19),t(21),t(23),t(25),t(27)},,function(e,n){},,,,,function(e,n){},,,,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){}]);