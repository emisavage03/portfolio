function setup() {
  createCanvas(32, 32);
  frameRate(1);
}

function draw() {
  background("white");
  

let cuteArray = ["⋆","⟡", "✿","★", "✮", "⋆","✩","⊹", "☄", "♠", "⍟", "✳","♣"];
let randomCute;
let cuteColors = ["#32a0bf", "#f5c748", "#f58583", "#6ec93c", "#e4292c", "#e73f6f", "#92c3dd", "#cbcd43", "#bcdc51"];
let randomColor;

 randomCute = random(cuteArray);
        randomColor = random(cuteColors);
        textAlign(CENTER)
        textSize(32);
        strokeWeight(2);
        stroke(randomColor);
        fill(randomColor);
        text(randomCute, 16, 26);

  let link = document.querySelector("link[rel~='icon']");
  link.href = canvas.toDataURL('image/png');
}
