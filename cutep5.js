let cuteArray = ["⋆","꩜", "ᯓ","★", "✮", "⋆", "˚","✩", "✶", "₊","⊹", "𖥔","˖","☘︎", "᯽", " ", " ", " "];
let randomCute;
let cuteColors = ["#29bf12", "#A5DC6A", "#08bdbd", "#ff9914", "#f21b3f", "#00a5cf"];
let randomColor;
let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
  
}

function draw() {
  background("white");
  
  let now = millis() - startTime;
  
  for (let i = 10; i < windowWidth; i += 40){
    for (let j = 10; j < windowHeight; j += 40){
    
      let distance = dist(mouseX, mouseY, i, j);
      
      let delay = distance * 2;
      
      if (now > delay) {
       
        let timeSinceActivation = now - delay;
       
        let changeInterval = 2500;
        let changeIndex = floor(timeSinceActivation / changeInterval);
        
        randomSeed(i * j + changeIndex * 1000);
        randomCute = random(cuteArray);
        randomColor = random(cuteColors);
        
        fill(randomColor);
        text(randomCute, i, j);
      }
    }
  }
}