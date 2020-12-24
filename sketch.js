let gridX = 60;
let gridY = 30;
let radius = 200;
let startDelay = 10;
let frame = 0;
let cellWidth;
let cellHeight;
let field;

function setup() {
    createCanvas(windowWidth,windowHeight);
    cellWidth = width/gridX;
    cellHeight = height/gridY;
    field = [];
    for (let i = 0; i < gridX; i++) {
        field[i] = [];
        for (let j = 0; j < gridY; j++) {
            field[i][j] = radians(45);
        }
    }

}

function draw() {
    background(225,0,255);
    noFill();
    stroke(255,255,0);
    strokeWeight(2);
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            push();
            let pos = createVector(i*cellWidth,j*cellHeight);
            let ref = rotationReference();
            let abs = createVector(pos.x + ref.x, pos.y + ref.y);
            if (abs.dist(createVector(mouseX,mouseY)) < radius && frame > startDelay) {
                let angle = atan2(mouseY - (abs.y), mouseX - (abs.x));
                field[i][j] = angle;
            }
            translate(abs.x,abs.y);
            rotate(field[i][j]);
            translate(-ref.x,-ref.y);
            drawShape();
            pop();
        }    
    }   
    frame++;
}

function rotationReference() {
    return createVector(cellWidth/2, cellHeight/2); // sets the rotation reference point
}

function drawShape() {
    //line(cellWidth*0.1,cellHeight/2,cellWidth*0.9,cellHeight/2);
    rect(cellWidth*0.1,cellHeight*.4,cellWidth*.8,cellHeight*.1); 
}

