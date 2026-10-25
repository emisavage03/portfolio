let gradientCircle;
let on, check, archivo;
let circles = [];
let myHues = [];
let myLights = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);

 archivo = await loadFont(
   'assets/Archivo-Italic.ttf'
  );
  textSize(14);
  textFont(archivo);
  textWeight(100);
 
  colorMode(HSL, 360, 100, 100, 1);
  textAlign(CENTER);

  myHues = [330, 253, 78, 60, 29, 210];
  myLights = [62, 69, 45, 69, 50, 57];
 
  on = false; 
  check = "dots on"
}

function draw() {
 // frameRate(30);

 background('white');


  // Loop backwards so removing items doesn't skip any
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].display();
  }

  if (on === true){
  if (frameCount % 10 === 0) {
    
    let innerColor = int(random(6));
    let outerColor = int(random(6));
   
     circles.push(new GradientCircle(mouseX, mouseY, random(1, 7), random(8, 15), random(12, 15), innerColor, outerColor));
      }
  }

  text(`click for ${check}`, width/2, height-25);
  
}

function mousePressed() {
  if (on === false) {
    on = true;
    check = "dots off";
  } else {
    on = false;
    check = "dots on"
  }

}

class GradientCircle {
  constructor(x, y, r0, r1, r2, innerColor, outerColor) {
    this.x = x;
    this.y = y;
    this.diff = random(0.5,3);
    this.r0 = r0*this.diff;           
    this.r1 = r1*this.diff;          
    this.r2 = r2*this.diff;
    this.innerColor = innerColor;
    this.outerColor = outerColor; 
    this.myAlpha = 0; 
    this.fadeSpeed = 0.0008; 

  }

  update() { 
    let deltaAlpha = this.fadeSpeed * deltaTime;
    this.myAlpha += deltaAlpha;

    if (this.myAlpha > 2) {
       this.fadeSpeed = -0.0008; 
    }
  }

  display() {
    let gradient = drawingContext.createRadialGradient(
      this.x, this.y, this.r0,
      this.x, this.y, this.r1,
      this.x, this.y, this.r2
    );
    gradient.addColorStop(0, color(myHues[this.innerColor], 100, myLights[this.innerColor], this.myAlpha));
    gradient.addColorStop(0.5, color(myHues[this.outerColor], 100, myLights[this.outerColor], this.myAlpha));
    gradient.addColorStop(1, color(100, 100, 100, 0));

    drawingContext.fillStyle = gradient;
    noStroke();
    circle(this.x, this.y, this.r2 * 2);
  }

}