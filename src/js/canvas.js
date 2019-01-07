           var j = Math.floor(Math.random() * 3) + 1;
           autogeneratedBody(j);
           console.log(j);
           function autogeneratedBody(j) {
            draw('canvas2', 'left-arm', '../img/' + j + '/arm-left', '.png' );
            draw('canvas', 'image', '../img/wizard', '.png' );
            draw('canvas3', 'right-arm', '../img/' + j + '/arm-right', '.png' );
            draw('canvas4', 'image3', '../img/gun', '.png' );
           }
           
           document.getElementById("image").style.display = 'none';
           function draw(cnv, id, url1, url2) {
           var context = document.getElementById(cnv).getContext('2d');
           var width = 100; var height = 100;
           var image = document.getElementById(id);

           var i = 1;
           setInterval ( function() {
            drawImage(url1 + i + url2);
           
            i += 1;
            if (i == 4) i = 1;
           },200);
            
           function drawImage(img) {
                image.onload = function() {
                    width = image.width;
                    height = image.height;
                    context.clearRect(0,0,700,500);
                    context.drawImage(image,0,0,width,height);
                    image.style.display = 'none';
                };  
                image.src = img;
            }
        }

        function drawWizard(cnv, id, url1, url2) {
            document.getElementById("canvas").style.display = 'none';
            document.getElementById("canvas1").style.position = 'static';
            var context = document.getElementById(cnv).getContext('2d');
            var width = 100; var height = 100;
            var image = document.getElementById(id);
 
            var i = 1;
            setInterval ( function() {
             drawImage(url1 + i + url2);
            
             i += 1;
             if (i == 6) { document.getElementById("canvas").style.display = 'block';
             document.getElementById("canvas1").style.display = 'none';
             document.getElementById('select-task').style.display = "block"
            }
            
            //if(i == 50) document.getElementById('select-task').style.display = "block";
            },100);
             
            function drawImage(img) {
                 image.onload = function() {
                     width = image.width;
                     height = image.height;
                     context.clearRect(0,0,700,500);
                     context.drawImage(image,0,0,width,height);
                     image.style.display = 'none';
                 };  
                 image.src = img;
             }
             //document.getElementById("canvas1").style.display = 'none';
             //document.getElementById("canvas").style.display = 'block';
         }

         
         function drawMonster(cnv, id, url1, url2) {
            document.getElementById("canvas4").style.display = 'none';
            document.getElementById("canvas5").style.position = 'absolute';
            var context = document.getElementById(cnv).getContext('2d');
            var width = 100; var height = 100;
            var image = document.getElementById(id);
 
            var i = 1;
            setInterval ( function() {
             drawImage(url1 + i + url2);
            
             i += 1;
             if (i == 9) { document.getElementById("canvas4").style.display = 'block';
             document.getElementById("canvas5").style.display = 'none';
             document.getElementById('select-task').style.display = "block"
            }
            
            //if(i == 50) document.getElementById('select-task').style.display = "block";
            },200);
             
            function drawImage(img) {
                 image.onload = function() {
                     width = image.width;
                     height = image.height;
                     context.clearRect(0,0,700,500);
                     context.drawImage(image,0,0,width,height);
                     image.style.display = 'none';
                 };  
                 image.src = img;
             }
             //document.getElementById("canvas1").style.display = 'none';
             //document.getElementById("canvas").style.display = 'block';
         }

         
        export function wizard_ang() {
            var audio = new Audio('../audio/wizard.mp3');
            audio.play();
         document.getElementById('canvas1').style.display = "block";
            drawWizard('canvas1', 'image2', '../img/a', '.png' );
           var positiv_monster = document.getElementById('positiv_monster').offsetWidth;
            positiv_monster -= 54;
            document.getElementById('positiv_monster').style.width = positiv_monster + "px";
           if (positiv_monster == 0) {
            draw('canvas6', 'image5', '../img/win', '.png' );
            setTimeout(function() {
                document.getElementById("select-task").style.display = "none";
                document.getElementById("win_message").style.display = "block";
              }, 500);
           
           }
           }

           export function monster_ang() {
            var audio = new Audio('../audio/monster.mp3');
            audio.play();
            document.getElementById('canvas5').style.display = "block";
            drawMonster('canvas5', 'image4', '../img/g', '.png' );
            var positiv_me = document.getElementById('positiv_me').offsetWidth;
            positiv_me -= 54;
            console.log(positiv_me);
            document.getElementById('positiv_me').style.width = positiv_me + "px";
           if (positiv_monster == 0) alert("Игра окончена");
           }
           