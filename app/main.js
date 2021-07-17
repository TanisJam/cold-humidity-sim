const slTemp = document.querySelector('#temp');
const slHumi = document.querySelector('#humi');
const board = document.querySelector('#board');
const slimes = document.querySelectorAll('.slime');

slTemp.oninput = function () {
    
    board.style.setProperty('--opacity', this.value / 100);

    let factorWidth = (this.value / 2 + 75) / 100;
    let factorHeight = ((this.value / 5) * 2 + 85) / 100;
    
    slimes.forEach(e => {
        let width = getComputedStyle(e).getPropertyValue('--slime-width-base');
        e.style.setProperty('--slime-width', width * factorWidth);

        let height = getComputedStyle(e).getPropertyValue('--slime-height-base');
        e.style.setProperty('--slime-height', height * factorHeight);

    })
}
slHumi.oninput = function () {
    board.style.setProperty('--saturation', this.value + '%');
}