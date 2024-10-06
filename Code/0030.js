
  createCanvas(220, 200); // Leinwand
  background(230);        // Hintergrund	
	
// für Rechtecke: gib die Koordinaten-Mitte an
  rectMode(CENTER);

/* Ein Körper mit kleinem Helm auf einem Halbkreis 
   zum Wackeln: nennen wir es eine "Wackelpuppe" */

// Wackelfuß
  circle(110, 140, 95); 
	
// Kopf oder Helm oder Mütze
  circle(110,  70, 75);
  square(110, 100, 95); // Körper
	
// Auge links
  circle( 85,  75, 17);
// Auge rechts
  circle(135,  75, 17);
	
// Nase
  square(110, 105, 15);

