// note to self, change hard coded position values to global variables
// you'll thank yourself later

var currentPalletteIndex = -1; //negative means not clicked
//to assign which pallette we want to assign color to

var img;
function preload() { //image function needs this
  img = loadImage('raindrops-1.jpg'); //image must be less than 1000x1000
}

function setup() {
  createCanvas(1000, 1000) //image size matches canvas
  image(img, 100, 25); // shifts image over to allow room for pallette
  initColorList();
}

var colorList = [];
function initColorList() {
  var i;
  for (i = 0; i < 5; i++) {
    colorList[i] = color(i * 40, i * 40, i * 40); //first loop is 0 times 40, then 1 times 40, and so on
  }
}

function drawPallette() {
  var i;
  var top; //top right corner of pallette box
  var height;
  top = 25;
  height = 50;
  for (i = 0; i < 5; i++) {
    fill(colorList[i]);
    rect (25, top + (height * i), 50, height);
  }
}

function assignPalletteEntry(mX, mY) { //doesn't need to be 'mouseX' and 'mouseY'
  colorList[0] = color(get(mX, mY)); //get function is called within color function
}

var value = 0;
function draw() {
  drawPallette();
}

function clickArea(mX, mY){

  var pMinX = 25;
  var pMaxX = 75;
  var pMinY = 25;
  var pMaxY = 250;

  var imgMinX = 100;
  var imgMaxX = 1100;
  var imgMinY = 25;
  var imgMaxY = 1025;
  if ((mX < pMinX || mX > imgMaxX) || (mY < pMinY || mY > imgMaxY)) {

    return;
  }

  if ((mX >= pMinX && mX <= pMaxX) && (mY >= pMinY && mY <= pMaxY)) {

    currentPalletteIndex = Math.floor((mY - 25)/50); //subtract 25 for offset
      return;
  }

  if ((mX >= imgMinX && mX <= imgMaxX) && (mY >= imgMinY && mY <= imgMaxY)) {

    if (currentPalletteIndex == -1) {
      alert("please select pallette entry");
      return;
    } else {
      colorList[currentPalletteIndex] = color(get(mX, mY));
    }
  }
}


function mouseClicked() {
    clickArea(mouseX, mouseY);
}
