/*<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="200"></canvas>
 </body>
</html>*/



function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
ctx.beginPath();
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"white");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,150,150);
ctx.arc(75,70,80,0,2*Math.PI);

ctx.arc(75,70,60,0,2*Math.PI);

ctx.moveTo(95,40);
ctx.lineTo(95,110);
ctx.moveTo(55,40);
ctx.lineTo(55,110);
ctx.moveTo(50, 40);
ctx.lineTo(50,70);
ctx.moveTo(60, 40);
ctx.lineTo(60,70);
ctx.moveTo(50,70);
ctx.lineTo(60,70);
ctx.moveTo(50,69);
ctx.lineTo(60,69);
ctx.moveTo(50,68);
ctx.lineTo(60,68);
ctx.moveTo(50,67);
ctx.lineTo(60,67);

ctx.moveTo(88,45);
ctx.lineTo(88,80);
ctx.moveTo(88,45);
ctx.lineTo(95,40);
ctx.moveTo(88,80);
ctx.lineTo(95,80);

ctx.moveTo(135,70);
ctx.lineTo(150,40);
ctx.moveTo(135,70);
ctx.lineTo(150,100);
//boja noza
ctx.moveTo(94,41);
ctx.lineTo(94,80);
ctx.moveTo(93,42);
ctx.lineTo(93,80);
ctx.moveTo(92,43);
ctx.lineTo(92,80);
ctx.moveTo(91,44);
ctx.lineTo(91,80);
ctx.moveTo(90,45);
ctx.lineTo(90,80);
ctx.moveTo(89,46);
ctx.lineTo(89,80);


ctx.stroke();
      
  }

}
