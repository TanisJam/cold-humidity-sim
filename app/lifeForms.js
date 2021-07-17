let boardDimensions = { x: 7, y: 7 }

class Life {
    constructor(width, height, temp, humi) {
        this.width = width;
        this.height = height;
        this.temp = temp;
        this.humi = parseInt(humi);
        this.pos = {
            x: this.randomPos(0, boardDimensions.x),
            y: this.randomPos(0, boardDimensions.y)
        }
        this.vel = {
            x: this.randomVel(-.1, .1),
            y: this.randomVel(-.1, .1)
        }
    }
    randomPos(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomVel(min, max) {
        return Math.random() * (max - min) + min;
    }
    updateTemp(temp) {
        this.temp = temp;
    }
    calcDimensions() {
        return {
            width: ((temp / 2 + 75) / 100) * this.width,
            height: (((temp / 5) * 2 + 80) / 100) * this.height
        }
    }
    updatePos() {


        // add position in x
        // if position in x is outside the boundaries, set position to boundarie and multiply vel by -1
        let dimensions = this.calcDimensions();
        let factor = +((this.temp / 100) -0.5) + 1;
        console.log(factor);

        this.pos.x = this.pos.x + this.vel.x * factor;
        if (this.pos.x > (boardDimensions.x + (dimensions.width / 60) / 2)) {
            this.pos.x = boardDimensions.x + (dimensions.width / 60) / 2;
            this.vel.x = this.vel.x * -1;
        }
        if (this.pos.x < (0 - (dimensions.width / 60) / 2)) {
            this.pos.x = 0 - (dimensions.width / 60) / 2;
            this.vel.x = this.vel.x * -1;
        }

        this.pos.y = this.pos.y + this.vel.y * factor;
        if (this.pos.y > (boardDimensions.y + (dimensions.height / 2) / 50)) {
            this.pos.y = boardDimensions.y + (dimensions.height / 2) / 50;
            this.vel.y = this.vel.y * -1;
        }
        if (this.pos.y < (0 - (dimensions.height / 2) / 50)) {
            this.pos.y = 0 - (dimensions.height / 2) / 50;
            this.vel.y = this.vel.y * -1;
        }
    }

}

class Slime extends Life {
    constructor(width, height, color) {
        super(width, height, temp, humi);
        this.color = color;

    }

    getHtml() {
        let dimensions = this.calcDimensions();
        let slimeElement = document.createElement('div');
        slimeElement.className = "slime";
        slimeElement.style.setProperty('--slime-width', dimensions.width);
        slimeElement.style.setProperty('--slime-height', dimensions.height);
        slimeElement.style.setProperty('--slime-color', `var(--color-${this.color}`);
        slimeElement.style.setProperty('--pos-x', this.pos.x);
        slimeElement.style.setProperty('--pos-y', this.pos.y);

        return slimeElement;
    }
}