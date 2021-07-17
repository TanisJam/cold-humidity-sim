let color = Math.floor(Math.random() * (9 - 1) + 1);

let limo1 = new Slime(30, 26, color, temp, humi);

let limos = [limo1];



function addSlimes(slimes) {
    slimes.forEach((slime, index) => {

        board.appendChild(slime.getHtml());
        
    });
}




addSlimes(limos);