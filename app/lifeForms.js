class Life {
    constructor(width, height, temp, humi) {
        this.width = width;
        this.height = height;
        this.temp = parseInt(temp);
        this.humi = parseInt(humi);
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
        super(width, height, temp, humi);
        this.color = color;
    }

    change(temp, humi) {

        let factorWidth = (temp / 2 + 75) / 100;
        let factorHeight = ((temp / 5) * 2 + 85) / 100;

        let width = getComputedStyle(e).getPropertyValue('--slime-width-base');
        e.style.setProperty('--slime-width', width * factorWidth);

        let height = getComputedStyle(e).getPropertyValue('--slime-height-base');
        e.style.setProperty('--slime-height', height * factorHeight);
    }

    getHtml() {
        let slimeElement = document.createElement('div');
        slimeElement.className = "slime";
        slimeElement.style.setProperty('--slime-width-base', this.width);
        slimeElement.style.setProperty('--slime-height-base', this.height);
        slimeElement.style.setProperty('--slime-color', `var(--color-${this.color}`);
        slimeElement.style.setProperty('--pos-x', this.pos.x);
        slimeElement.style.setProperty('--pos-y', this.pos.y);

        return slimeElement;
    }
}