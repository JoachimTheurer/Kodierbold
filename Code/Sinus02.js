//file:///C:/DATA/JAVASCRIPT/CODE/PROJEKT/PLOT/index.html
//var kreis = { x:100, y:100, diameter:5 }; 

  let t = 0
  let tau = 360;
  let incr = 5;
  
function setup() {
  createCanvas(400, 400);
  background(200);
  //noLoop();
}

function draw() {
background(200);
  for (phi = 0; phi < tau; phi = phi + incr ) {
    x = width / 2 - (Math.cos((phi / 180 * Math.PI)) * width / 2 );
    y = height - ((Math.sin((phi+t) / 180 * Math.PI) + 1) * height / 2 );
    ellipse(x, y, 5);
  }
if (t>4000){noLoop()}
t = t + incr
//createP(t)
}
