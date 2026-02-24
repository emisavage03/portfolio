



let faviconSketch = function(b) {
let cuteArray = ["⋆","⟡", "✿","★", "✮", "⋆", "✩", "✶","⊹", "☄", "♠", "⍟", "✳","♣"];
let randomCute;
let cuteColors = ["#32a0bf", "#f5c748", "#f58583", "#6ec93c", "#e4292c", "#e73f6f", "#92c3dd", "#cbcd43", "#bcdc51"];
let randomColor;

b.setup = function() {
  b.createCanvas(32, 32);
  b.frameRate(1);
}

b.draw = function() {
  b.background("white");
  randomCute = b.random(cuteArray);
  randomColor = b.random(cuteColors);
  b.textAlign(b.CENTER);
  b.textSize(32);
  b.strokeWeight(2);
  b.stroke(randomColor);
  b.fill(randomColor);
  b.text(randomCute, 16, 26);

  let link = document.querySelector("link[rel~='icon']");
  link.href = b.canvas.toDataURL('image/png');
}

}

let faviconP5 = new p5(faviconSketch);



let BGsketch = function(a) {

let cuteArray = ["⋆","⟡", "✿","★", "✮", "⋆", "˚","✩", "✶", "₊","⊹", "☄", "♠", "⍟", "✳","˖","♣", "*", " ", " ", " ", " "];
let randomCute;
let cuteColors = ["#32a0bf", "#f5c748", "#f58583", "#6ec93c", "#e4292c", "#e73f6f", "#92c3dd", "#cbcd43", "#bcdc51"];
let randomColor;
let startTime;


  a.setup = function() {
    a.createCanvas(a.windowWidth, a.windowHeight);
    startTime = a.millis();
  }

  a.draw = function() {
    a.background("white");
    let now = a.millis() - startTime;
    
    for (let i = 15; i < a.windowWidth; i += 50){
      for (let j = 15; j < a.windowHeight; j += 50){
        let distance = a.dist(a.mouseX, a.mouseY, i, j);
        let delay = distance * 2;
        if (now > delay) {
          let timeSinceActivation = now - delay;
          let changeInterval = 2500;
          let changeIndex = a.floor(timeSinceActivation / changeInterval);
          a.randomSeed(i * j + changeIndex * 1000);
          randomCute = a.random(cuteArray);
          randomColor = a.random(cuteColors);
          a.textSize(12);
          a.fill(randomColor);
          a.text(randomCute, i, j);
        }

}
    }
  }
}

let myp5 = new p5(BGsketch);