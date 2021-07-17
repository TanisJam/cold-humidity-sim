function createSlimes(amount) {
    let slimes = [];
    for (let index = 0; index < amount; index++) {

        let color = Math.floor(Math.random() * (9 - 1) + 1);
        let width = Math.floor(Math.random() * (33 - 27) + 27);
        let height = Math.floor(Math.random() * (28 - 24) + 24);

        let limo = new Slime(width, height, color, temp, humi);

        slimes.push(limo);

    }
    return slimes;
}