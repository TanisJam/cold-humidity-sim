class Life {
    constructor(width,height) {
        this.width = width;
        this.height = height;
        this.pos = {
            x: this.randomPos(0, 7),
            y: this.randomPos(0, 7)
        }
    }
    randomPos(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

class Slime extends Life {
    constructor(width, height, color) {
        super(width,height);
        this.color = color;
    }
}