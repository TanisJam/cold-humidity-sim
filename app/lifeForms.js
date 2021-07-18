let boardDimensions = { x: 8, y: 8 }

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

    updatePos() {

        // add position in x
        // if position in x is outside the boundaries, set position to boundarie and multiply vel by -1
        let dimensions = this.calcDimensions(); //get dimensions relatives with temp
        let factor = +((this.temp / 100) - 0.5) + 1; //factor that modifies speed by temp
        let offsetWidth = ((1 / ((dimensions.width * 100) / this.width) * 100) * .05) + .95;
        let offsetHeight = ((1 / ((dimensions.height * 100) / this.height) * 100) * .05) + .95;

        this.pos.x = this.pos.x + this.vel.x * factor;
        if (this.pos.x > (boardDimensions.x - .5) * offsetWidth) {
            this.pos.x = (boardDimensions.x - .5) * offsetWidth;
            this.vel.x = this.vel.x * -1;
        }
        if (this.pos.x < 1 - 1) {
            this.pos.x = 1 - 1;
            this.vel.x = this.vel.x * -1;
        }

        this.pos.y = this.pos.y + this.vel.y * factor;
        if (this.pos.y > (boardDimensions.y - .4) * offsetHeight) {
            this.pos.y = (boardDimensions.y - .4) * offsetHeight;
            this.vel.y = this.vel.y * -1;
        }
        if (this.pos.y < 1 - 1) {
            this.pos.y = 1 - 1;
            this.vel.y = this.vel.y * -1;
        }
    }

}

class Slime extends Life {
    constructor(width, height, color) {
        super(width, height, temp, humi);
        this.color = color;
    }

    calcDimensions() {
        return {
            width: ((temp / 2 + 75) / 100) * this.width,
            height: (((temp / 5) * 2 + 80) / 100) * this.height,
            humi: `${parseInt(humi)}% ${parseInt(humi)}% ${humi - 15}% ${humi - 15}%`
        }
    }

    getCollide(obj) {
        const thisDim = this.calcDimensions();
        const objDim = obj.calcDimensions();
        let a = ((thisDim.height / 2) + (objDim.height / 2)) / 60;
        let x = this.pos.x - obj.pos.x;
        let y = this.pos.y - obj.pos.y;

        let distance = Math.sqrt((x * x) + (y * y));

        if (distance <= a) {
            let vCollision = { x: obj.pos.x - this.pos.x, y: obj.pos.y - this.pos.y };
            let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };

            let vRelativeVelocity = { x: this.vel.x - obj.vel.x, y: this.vel.y - obj.vel.y };
            let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

            if (speed < 0) {

            } else {
                this.vel.x -= (speed * vCollisionNorm.x);
                this.vel.y -= (speed * vCollisionNorm.y);
                obj.vel.x += (speed * vCollisionNorm.x);
                obj.vel.y += (speed * vCollisionNorm.y);
            }


        }

        let circleIntersect = function (x1, y1, r1, x2, y2, r2) {

            // Calculate the distance between the two circles
            let squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
            // When the distance is smaller or equal to the sum
            // of the two radius, the circles touch or overlap
            return squareDistance <= ((r1 + r2) * (r1 + r2))
        }

    }



    getHtml() {
        let dimensions = this.calcDimensions();
        let slimeElement = document.createElement('div');
        slimeElement.className = "slime";
        slimeElement.style.setProperty('--slime-width', dimensions.width);
        slimeElement.style.setProperty('--slime-height', dimensions.height);
        slimeElement.style.setProperty('border-radius', dimensions.humi)
        slimeElement.style.setProperty('--slime-color', `var(--color-${this.color}`);
        slimeElement.style.setProperty('--pos-x', this.pos.x);
        slimeElement.style.setProperty('--pos-y', this.pos.y);

        return slimeElement;
    }
}