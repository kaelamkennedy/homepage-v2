let bg;
let y = 0
let trail = [];
let a = 0;


function setup() {
    createCanvas(windowWidth,windowHeight)

}

function draw() {
  background(225)
  trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  noStroke();
  fill(250, 250, 0, a);
  ellipse(trail[i][0], trail[i][1], 8);
    if(a > 255) {
      trail.shift();
      a = 0;
    }
    a += 8;
  }
  console.log(trail.length);
  
}