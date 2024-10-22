createCanvas(220, 200);
background(200);

/* alle Koordinaten im Uhrzeigersinn */

// Parallelogramm: oben links
quad(40, 10, 110, 10, 90, 90, 20, 90);
// Trapez: unten links
quad(40, 110, 100, 110, 120, 190, 20, 190);
// Drache: rechts aussenrum
quad(160, 10, 210, 70, 160, 190, 110, 70);
// Raute: rechts innendrin
quad(160, 40, 200, 70, 160, 100, 120, 70);
