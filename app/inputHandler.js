const slTemp = document.querySelector('#temp');
let temp = slTemp.value;

const slHumi = document.querySelector('#humi');
let humi = slHumi.value;

const board = document.querySelector('#board');
const slimes = document.querySelectorAll('.slime');


slTemp.oninput = function () {
    temp = this.value;
    
    board.style.setProperty('--opacity', temp / 100);  
    

}
slHumi.oninput = function () {
    humi = this.value;

    board.style.setProperty('--saturation', humi + '%');
}