function setup() {
    createCanvas(canvas.width, canvas.height);
    bg = loadImage('assets/img/bg1.png');
}
bird = new Bird();
_status = new Status();
bar = new Bar();
bars = [bar];
function draw() {
    background(117, 133, 254);
    bars.forEach((bar, index) => {
        bar.show();
    });
    bird.update();
    bird.show();
    _status.show();

}
function keyPressed() {
    if (keyCode === 32) {
        if (!bird.alive) {
            bird = new Bird();
            _status = new Status(_status);
            bar = new Bar();
            bars = [bar];
        }
        bird.jump();
    }
}
function mouseClicked() {
    bird.jump();
}