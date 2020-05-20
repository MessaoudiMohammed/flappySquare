function setup() {
    createCanvas(canvas.width, canvas.height);
    song = createAudio('./assets/coins.mp3');
}
bird = null;
_status = new Status();
bar = new Bar();
bars = [bar];
function draw() {
    background(117, 133, 254);
    if (bird === null) {
        fill(255)
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Press Any Key to Start!", canvas.width / 2, canvas.height / 2);
    } else {
        bars.forEach((bar, index) => {
            bar.show();
        });
        bird.update();
        bird.show();
        _status.show();
    }

}

function keyPressed() {
    if (bird != null) {
        if (keyCode === 32) {
            bird.jump();
        }
    } else {
        bird = new Bird();
    }

}