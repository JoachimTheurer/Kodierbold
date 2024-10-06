/* Die Variable "durchmesser" wird
   angelegt und initialisiert      */
let durchmesser = 1;

function setup() {
  createCanvas(220, 200);
  background(235);
}

function draw() {
  /* Die Variable "durchmesser" wird
   statt einer Zahl verwendet      */
  circle(110, 100, durchmesser);

  /* Der Wert von "durchmesser" wird
   um 1 erhöht - bei jedem Durchlauf 
   von "draw"                     */
  durchmesser = durchmesser + 1;
}
