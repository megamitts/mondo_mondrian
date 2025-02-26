let squares = [];
let timer = 0;
let timer2 =0;

let circleX = 700;
let circleY = 700;
let circleRadius = 100;
let shrinking = true; // Add a flag to control shrinking/growing
let edge = true;

let audio = document.getElementById("myAudio");
   
  


function setup() {
  createCanvas(800, 800);
}

function draw() {

	playAudio();
  background(255); // Clear screen each frame

  // Draw all stored squares
  for (let sq of squares) {
    
    // equivalent of: for (let i = 0; i < squares.length; i++) {
  // sq = squares[i];
    
    strokeWeight(sq.strokeWeight);
    fill(sq.color);
    rect(sq.x, sq.y, sq.w, sq.h);
  }

  // Add new squares at intervals
  timer++;
  timer2++;
  if (timer > 25) {
    let x = random(10, random(380));
    let y = random(10, random(380));
    let w = x; // Keeping your original random sizing
    let h = y;
    

    squares.push({
      x,
      y,
      w,
      h,
      color: color(random(255), random(255), random(255)),
      strokeWeight: random(1, 10),
    });

    timer = 0;
    
  }

if (timer2 > 3360){
// Shrink or grow the circle based on the flag
if (shrinking) {
  circleRadius = circleRadius - 1;
} else {
  circleRadius = circleRadius + 1;
}

// Reverse the shrinking/growing direction
if (circleRadius <= 0) {
  shrinking = false;
} else if (circleRadius >= 100) {
  shrinking = true;
}
 
  if (circleX <= 0){
    edge = false;
  } else if (circleX >= 700){
    edge = true;
  }
  
  if (edge){
    circleX--;
    circleY--;
  } else {
    circleX++;
    circleY++;

  }


  
  fill(255);
  circle(circleX, circleY, circleRadius);
}
  
  //ellipse(700,700,100,100);
}

	


	

function playAudio() {
    audio.play();
  }
