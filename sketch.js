var naru;

function setup() {
  createCanvas(400, 400,WEBGL);
  naru = new kakashi();
  frameRate(15);  
}

function draw() {
  background(220);
  if (keyCode == 37){
  naru.girar() 
}
  else{
  naru.mostrar();
}
  if(keyIsPressed && keyCode == 37){
  naru.moverIzq();
}
  else if(keyIsPressed && keyCode == 39){
  naru.moverDer();
}
}
