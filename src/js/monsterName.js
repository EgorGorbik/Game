var arr1 = ['злобный', 'ужасный','страшный','сопливый'];
var arr2 = ['орг', 'гном','гоблин', 'монстр'];
var arr3 = ['Володя', 'Василий', 'Том', 'Макс'];

document.getElementsByTagName('p')[6].innerHTML = arr1[Math.floor(Math.random() * 2) + 0] + ' ' +
arr2[Math.floor(Math.random() * 4) + 0]  + ' ' + arr3[Math.floor(Math.random() * 4) + 0] ;
