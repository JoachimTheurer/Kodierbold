
function setup() {
  createCanvas(220, 200);
  background(40, 20, 225);

  // Blau ohne Transparenz mit rgb()
  fill('rgb(0, 100, 55)');
  noStroke();
  rect(55, 70, 120, 85);

  // Blau ohne Transparenz mit rgba() und Alpha-Wert 1
  fill('rgba(200, 0, 255, 250)');
  rect(170, 50, 15, 15);

fill('rgba(160, 0, 255, 0.5)'); // Halbtransparentes Blau</p>

strokeWeight(4); // Setzt die Dicke der Randlinie
  rect(60, 10, 30, 70);

noStroke(); // Deaktiviert die Randlinie

    noFill(); // Deaktiviert die Füllfarbe
// Rechtecke ohne Füllung
  stroke(255, 0, 0); // Setzt die Randfarbe auf Rot
  strokeWeight(4); // Setzt die Dicke der Randlinie
  noFill(); // Deaktiviert die Füllfarbe
  rect(70, 100, 70, 30); // Zeichnet ein Rechteck ohne Füllung

  // Rechtecke mit Füllung
  fill(0, 255, 0); // Setzt die Füllfarbe auf Grün
  rect(120, 20, 50, 120, 10); // Zeichnet ein Rechteck mit grüner Füllung

  // Ellipsen ohne Füllung
  stroke(0, 0, 255); // Setzt die Randfarbe auf Blau
  noFill(); // Deaktiviert die Füllfarbe
  ellipse(170, 160, 40, 40); // Zeichnet eine Ellipse ohne Füllung

  // Ellipsen mit Füllung
  fill(255, 255, 0); // Setzt die Füllfarbe auf Gelb
  ellipse(70, 160, 40, 40); // Zeichnet eine Ellipse mit gelber Füllung
}
