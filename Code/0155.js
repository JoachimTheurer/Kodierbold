
function setup() {
  createCanvas(220, 200);
  background(235);
  rectMode(CENTER);
}

function draw() {  
  hase();  // rufe Funktion hase()
}

function hase() {
  fill("brown");
  ellipse(28, 43, 10, 30); // linkes Ohr
  ellipse(52, 43, 10, 30); // rechtes Ohr
  fill("pink");
  circle(40, 65, 40); // Kopf des Hasen
  strokeWeight(1);
  fill("lightblue");
  circle(33, 59, 8); // linkes Auge
  circle(47, 59, 8); // rechtes Auge
  fill("yellow");
  triangle(40, 67, 35, 74, 45, 74); // Nase
}
