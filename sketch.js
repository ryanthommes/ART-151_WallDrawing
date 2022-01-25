

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    var originX = width / 2;
    var originY = height / 2;

    background(255);
    strokeWeight(5);
    rect(0, 0, width, height)

    for (let lineX = 5; lineX <= width; lineX += 10) {
        line(lineX, 0, lineX, height);
    }

    strokeWeight(5);

    for (let d = 610; d >= 5; d -= 20) {
        circle(originX, originY, d);
    }
}