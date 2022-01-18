
let canvasBee = document.getElementById("bee");
let contextBee = canvasBee.getContext("2d");

let beeCircle = function(x, y, radius, fillCircle) {
   contextBee.beginPath();
   contextBee.arc(x, y, radius, 0, Math.PI*2, false);
   if (fillCircle) {
      contextBee.fill();
   }
   else {
      contextBee.stroke();
   }
}

let beeSmile = function(x, y, radius, fillCircle)  {
   contextBee.beginPath();
   contextBee.arc(x, y, radius, 0, Math.PI, false);
   if (fillCircle) {
      contextBee.stroke();
   }
}

let drawBee = function(x, y) {
   contextBee.lineWidth = 2;
   contextBee.fillStyle = "Gold";
   contextBee.strokeStyle = "Black";
   beeCircle(x, y, 16, true);
   beeCircle(x, y, 16, false);
   beeCircle(x - 10, y - 23, 10, false);
   beeCircle(x + 10, y - 23, 10, false);
   beeCircle(x - 4, y - 1, 4, false);
   beeCircle(x + 4, y - 1, 4, false);
   beeSmile(x, y + 7, 5, true);
}

let update = function(coordinaton) {
   let offset = Math.random()*4 - 2;
   coordinaton += offset;
   if (coordinaton > 150) {
      coordinaton = 150;
   }
   if (coordinaton < 30) {
      coordinaton = 30;
   }
   return coordinaton;
}

let x = 100;
let y = 100;

let movingStart = function() {
   contextBee.clearRect(0, 0, 500, 500);
   drawBee(x, y);
   x = update(x);
   y = update(y);
   contextBee.strokeRect(0, 0, 300, 300);
}

setInterval(movingStart, Math.random());


