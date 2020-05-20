class Bird {
    y = canvas.height / 2;
    x = canvas.width / 3;
    alive = true;
    gravity = 1;
    height = 25;
    width = 25;
    color = {
        r: 150,
        g: 100,
        b: 0
    }
    jump() {
        if (this.alive) {
            this.y -= this.gravity;
            this.gravity = -10
        }
    }
    show() {
        fill(bird.color.r, bird.color.g, bird.color.b);
        square(bird.x, bird.y, bird.height);
    }
    update() {
        this.barTouched()
        if (this.y + this.gravity < canvas.height) {
            this.y += this.gravity;
            this.gravity++;
        }
        else {
            this.alive = false;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }
    barTouched() {
        if (bars[0].x < this.x + this.width && bars[0].x + bars[0].width > this.x) {
            if (this.y >= 0 && this.y <= bars[0].rand) {
                this.alive = false;
            }
            if (this.y + this.height <= canvas.height && this.y + this.height >= bars[0].rand + bars[0].space) {
                this.alive = false;
            }
        }
    }
}


class Bar {
    width = 50;
    color = {
        r: 0,
        g: 255,
        b: 0
    };
    space = 150;
    x = canvas.width;
    checked = false;
    nextBar = false;
    rand = Math.floor(Math.random() * canvas.height - this.space);
    show() {
        while (this.rand < 10) {
            this.rand = Math.floor(Math.random() * canvas.height - this.space);
        }
        if (this.x + this.width > 0)
            this.x--;
        else {
            bars.shift();
        }
        if (!bird.alive) {
            this.x++;
        }
        fill(this.color.r, this.color.g, this.color.b);
        this.tTube = rect(this.x, 0, this.width, this.rand);
        fill(this.color.r, this.color.g, this.color.b);
        this.bTube = rect(this.x, this.rand + this.space, this.width, canvas.height - this.rand - this.space);
        if (!this.checked && bird.alive) {
            if (this.x < canvas.width / (9 / 2)) {
                bars.push(new Bar());
            }
        }
    }
}


class Status {
    score = 0;
    button = null;
    constructor(oldStatus) {
        if (oldStatus) {
            oldStatus.score = 0;
            oldStatus.button.remove();
        }
    }
    show() {
        if (!bird.alive) {
            fill(255, 0, 0);
            textSize(35);
            textAlign(CENTER, CENTER);
            text("Game Over!", canvas.width / 2, canvas.height / 2);
            fill(255, 255, 255);
            textSize(30);
            text("SCORE : " + this.score, (canvas.width / 2), (canvas.height / 2) - 40);
            if (this.button === null) {
                this.button = createButton('Replay');
                this.button.style('background-color', "green");
                this.button.style('color', "#fff");
                this.button.style('border', "1px solid green");
                this.button.style('cursor', "pointer");
                this.button.size(180, 50);

                this.button.position((canvas.width / 2) - 90, (canvas.height / 2) + 25);
                this.button.mousePressed(() => {
                    bird = new Bird();
                    _status = new Status();
                    bar = new Bar();
                    bars = [bar];
                    this.button.remove();
                    this.button = null;
                    this.score = 0;
                });
            }
        } else {
            fill(255, 255, 255);
            textSize(20);
            textAlign(CENTER, CENTER);
            text("Score:" + this.score, (canvas.width / 2), 25);
            if (bars[0].x < canvas.width / (9 / 2) && !bars[0].checked) {
                this.score++;
<<<<<<< HEAD
                song.volume(0.05);
                song.play();
=======
>>>>>>> ab3314f98f08460cddc1195fd60e85f51b4f2467
                bars[0].checked = true;
            }
        }
    }
}