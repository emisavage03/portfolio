let archivo;
let circles = [];
let palette = [];
let on = false;
let footer;
let show;
let hide;

let MAX_CIRCLES = 400;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  colorMode(HSL, 360, 100, 100, 1);

  footer = select('footer');
  show = select('p.hide');
  hide = select('p.show');

  let hues = [330, 31, 56, 80, 197, 247];
  let light = [56, 60, 67, 57, 50, 71];

  // build css color string for each color
  for (let i = 0; i < hues.length; i++) {
    palette.push({ h: hues[i], l: light[i] });
  }
}

function draw() {
  background('white');

  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    if (circles[i].isDead()) {
      circles.splice(i, 1);
    } else {
      circles[i].display();
    }
  }



  if (on && circles.length < MAX_CIRCLES) {
      circles.push(new GradientCircle(
      mouseX, mouseY,
      random(1, 7), random(8, 15), random(12, 15),
      int(random(6)), int(random(6))
    ));

    if (frameCount % 2 === 0 ){

    

    circles.push(new GradientCircle(
      random(width), random(height),
      random(1, 7), random(8, 15), random(12, 15),
      int(random(6)), int(random(6))
    ));
    }

 
  }
}

function mousePressed() {
  on = !on;

  footer.toggleClass('pink');
  show.toggleClass('hide');
  hide.toggleClass('hide');


}

class GradientCircle {
  constructor(x, y, r0, r1, r2, innerColor, outerColor) {
    this.x = x;
    this.y = y;
    this.diff = random(0.5, 3);
    this.r0 = r0 * this.diff;
    this.r1 = r1 * this.diff;
    this.r2 = r2 * this.diff;
    this.innerColor = innerColor;
    this.outerColor = outerColor;
    this.myAlpha = 0;
    this.fadeSpeed = 0.0008;
    this.fadingOut = false;
  }

  update() {
    this.myAlpha += this.fadeSpeed * deltaTime;

    if (!this.fadingOut && this.myAlpha > 2) {
      this.fadingOut = true;
      this.fadeSpeed = -0.0008;
    }
  }

  isDead() {
    return this.fadingOut && this.myAlpha <= 0;
  }

  display() {
    // Canvas alpha is clamped to 0-1, so alpha above 1 just holds at full
    let a = constrain(this.myAlpha, 0, 1);
    let ic = palette[this.innerColor];
    let oc = palette[this.outerColor];

    let gradient = drawingContext.createRadialGradient(
      this.x, this.y, this.r0,
      this.x, this.y, this.r1
    );
    gradient.addColorStop(0, `hsla(${ic.h}, 100%, ${ic.l}%, ${a})`);
    gradient.addColorStop(0.5, `hsla(${oc.h}, 100%, ${oc.l}%, ${a})`);
    gradient.addColorStop(1, `hsla(0, 0%, 100%, 0)`);

    drawingContext.fillStyle = gradient;
    noStroke();
    circle(this.x, this.y, this.r2 * 2);
  }
}