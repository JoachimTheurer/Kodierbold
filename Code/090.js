function setup() {
  createCanvas(220, 200);
  background("brown");
}

/*  Kreise von außen nach innen */
function draw() {
  strokeWeight(25);// Randdicke
	fill(255, 0, 0);//  rote Füllung

  stroke("blue");// blauer Rand
  circle(110, 100, 160);//Äußerer Kreis

  stroke(0, 255, 0);// grüner Rand (RGB)
  ellipse(110, 100, 110);//Mittlerer Kreis

  stroke("yellow");// gelber Rand
  circle(110, 100, 60);//Innerer Kreis
}