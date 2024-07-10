function setup() {
  createCanvas(200, 200);
  background(235);
}

function draw() {
  
  strokeWeight(14); // dicker Rand
  rect(20, 20, 160, 160); // Kasten aussenrum

  strokeWeight(3); // schmale Linienstärke
  line(35, 35, 35, 158); // Linie links

  strokeWeight(6); // mittlere Linienstärke
  line(37, 37, 160, 35); // Linie oben

  strokeWeight(9); // große Linienstärke
  line(160, 37, 160, 156); // Linie rechts

  strokeWeight(1); // Linienstärke wie normal
  line(160, 160, 35, 160); // Linie unten

  strokeWeight(35); // richtig massiver Rand
  circle(96, 96, 60); // Kreis wird zur Scheibe
}  
