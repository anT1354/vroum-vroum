var canvas;
let image1;
let graphic;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 10);
  canvas.position(0, 0);
  canvas.style('z-index', '-10');
  image1 = loadImage("56jj1v.jpg");
  graphic = createGraphics(windowWidth,windowHeight*10)
  
  
  

   

}

function draw() {
  background(100)
  clear();
  push();
  background(192, 192, 192);
  fill(160, 0, 128);
  strokeWeight(5);
  stroke(255, 255, 0);
  circle( mouseX, mouseY, 50);
  pop();
  
  
  image(image1,mouseX - 203, mouseY -62, 250, 250);
  
   if (mouseIsPressed) {
     for(let i=0; i < 0; i++) {
      graphic.square(random(0 ,width),random(0 ,height*10), 50)
      graphic
    }

  }
  image(graphic, 0, 0);


}

var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Démarrer la voiture') {
    btn.value = 'Arrêter la voiture';
    txt.textContent = 'La voiture est démarrée !';
  } else {
    btn.value = 'Démarrer la voiture';
    txt.textContent = 'La voiture est arrêtée.';
  }
}







