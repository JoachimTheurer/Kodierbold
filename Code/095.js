function setup() {
  createCanvas(200, 200);
  background('brown');
}
function draw() {
  /* Die fill Funktion bekommt ein 
     viertes Argument: "Alpha" */

  fill(250, 50, 50, 100); //alpha=100
  square(10, 10, 80); //rotes Quadrat

  fill(50, 250, 50, 120); //alpha=120
  square(40, 40, 80); //grünes Quadrat

  fill(50, 50, 250, 140); //alpha=140
  square(70, 70, 80); //blaues Quadrat

  fill(255, 255, 0, 160); //alpha=160
  square(100, 100, 80); //gelbes Quadrat
}
