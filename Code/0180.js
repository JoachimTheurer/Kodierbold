let durchmesser = 88;  // Startdurchmesser des Kreises

function setup() {
  createCanvas(220, 200);
  frameRate(2);  // Langsame Bildwiederholrate für sichtbare Einzelschritte
}

function draw() {
  background("green");
  
  // Zeichne den Kreis in der Mitte des Canvas
  fill(255, 0, 0);  // Rote Füllfarbe
  circle(width/2, height/2, durchmesser);
  
  // Erhöhe den Durchmesser um je 1 Pixel pro Frame
  durchmesser = durchmesser + 1; 
}
