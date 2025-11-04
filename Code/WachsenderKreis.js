let durchmesser = 20;  // Startdurchmesser des Kreises

function setup() {
  createCanvas(400, 400);
  frameRate(2);  // Langsame Bildwiederholrate für sichtbare Einzelschritte
}

function draw() {
  background(220);
  
  // Zeichne den Kreis in der Mitte des Canvas
  fill(255, 0, 0);  // Rote Füllfarbe
  circle(width/2, height/2, durchmesser);
  
  // Erhöhe den Durchmesser um 10 Pixel pro Frame
  durchmesser = durchmesser + 10;
  
  // Optional: Zurücksetzen wenn der Kreis zu groß wird
  if (durchmesser > 380) {
    durchmesser = 20;
  }
}
