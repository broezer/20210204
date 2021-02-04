const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let l1, l2;

let cols, rows;
let scl = 30;
let w = 1400;
let h = 1000;

let terrain = [];

function setup() {
   createCanvas(400, 400, WEBGL);
 
   c1 = color(252, 38, 192);
   c2 = color(245, 129, 150);
   c3 = color(244, 250, 10);
   
   b1 = color(46, 0, 100);
   b2 = color(255, 255, 255);
   b3 = color(118, 0, 255);

   
   l1 = color(0, 220, 220);
   l2 = color(29,0,41);
   
   cols = w / scl;
   rows = h / scl;
   
   for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
   
}


function draw() {
 
     push();
     translate(0 , 0, width * -1);
     setGradient(-width * 1.2, height * -1.2 , width * 3, height * 1.2, b1, b2, b1, Y_AXIS);
     setGradient(-width * 1.2 ,0, width * 3, height*0.8, b1, b3, b1,Y_AXIS);
     pop();
    
    
    
 
    push();
    translate(width * -0.9, height * 0.25, width * -0.5);
    rotateX(PI / 2);
    noFill();
    
    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols; x++) {
        fill(l2);
        stroke(b3);
        rect(x*scl, y*scl, scl, scl);
      }
    }
    
    pop();
    
    translate(0,0,1);
    
    scale(0.8);
    translate(-10,0 ,100);
    b3.setAlpha(50);
    fill(b3);
    setShape();
    
    scale(0.9);
    translate(width * -0.015, height * -0.015,0);
    b3.setAlpha(100);
    fill(b3);
    setShape();
    
    scale(0.9);
    translate(width * -0.015, height * -0.015,0);
    b3.setAlpha(150);
    fill(b3);
    setShape();
    
    
    save("20210204.png");
    noLoop();
        
    
}


function setShape(){
    noStroke();
    beginShape();
    vertex( -width * 0.4, height * -0.3);
    vertex(width * 0.5, height * -0.4);
    vertex(-width * 0.2, height * 0.3);
    endShape();

}


function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}
