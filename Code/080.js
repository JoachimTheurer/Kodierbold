function setup() {
  createCanvas(220, 200);
  background(220);
}

function draw(){
// Erste Reihe
  fill('red');       // >>> setze Rot <<<
  circle(050, 50, 50);//  1. Kreis: rot
  circle(110, 50, 50);//  2. Kreis: immer noch Rot 
  fill('blue');     //  >>> setze Blau <<<
  circle(180, 50, 50);//  3. Kreis: blau

// Zweite Reihe   
  circle(050, 140, 50);// immer noch Blau
  fill('green');    // >>> setze Grün <<<
  circle(110, 140, 50);// grüner Kreis 
  fill('white');    // >>> setze Weiss <<<
  circle(180, 140, 50);// weisser Kreis
}