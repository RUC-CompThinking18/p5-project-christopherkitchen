var img;
function preload() { //image function needs this
  img = loadImage('raindrops-1.jpg'); //image must be less than 1000x1000
}
function setup() {
  createCanvas(1000, 1000) //image size matches canvas
  image(img, 0, 0);
}

function draw() {

}

var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
