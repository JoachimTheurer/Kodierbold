function setup() {
  createCanvas(200, 200);
  background(150, 150);
}
function draw() {
  /* Die fill Funktion bekommt ein 
     viertes Argument: "alpha" */

  fill(250, 50, 50, 200); //alpha=200
  square(10, 10, 80); //rotes Quadrat

  fill(50, 250, 50, 150); //alpha=200
  square(40, 40, 80); //rotes Quadrat

  fill(50, 50, 250, 100); //alpha=200
  square(70, 70, 80); //rotes Quadrat

  fill(255, 255, 0, 50); //alpha=200
  square(100, 100, 80); //rotes Quadrat
}
