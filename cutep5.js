let cuteArray = ["⋆","⟡", "✿","★", "✮", "⋆", "˚","✩", "✶", "₊","⊹", "☄", "♠", "⍟", "✳","˖","♣", "*", " ", " ", " ", " "];
let randomCute;
let cuteColors = ["#32a0bf", "#f5c748", "#f58583", "#6ec93c", "#e4292c", "#e73f6f", "#92c3dd", "#cbcd43", "#bcdc51"];
let randomColor;
let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
  
}

function draw() {
  background("white");
  
  let now = millis() - startTime;
  
  for (let i = 15; i < windowWidth; i += 50){
    for (let j = 15; j < windowHeight; j += 50){
    
      let distance = dist(mouseX, mouseY, i, j);
      
      let delay = distance * 2;
      
      if (now > delay) {
       
        let timeSinceActivation = now - delay;
       
        let changeInterval = 2500;
        let changeIndex = floor(timeSinceActivation / changeInterval);
        
        randomSeed(i * j + changeIndex * 1000);
        randomCute = random(cuteArray);
        randomColor = random(cuteColors);
        
        textSize(12);
        fill(randomColor);
        text(randomCute, i, j);
      }
    }
  }
}