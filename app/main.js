let limos = createSlimes(5);

function update() {
    limos.forEach(slime => {
        slime.updateTemp(temp)
        slime.updatePos();
    })
}

function draw() {
    board.innerHTML = ('');
    limos.forEach(slime => {
        board.appendChild(slime.getHtml());
    });
}


let lastFrameTimeMs = 0;
let maxFPS = 60;
function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    lastFrameTimeMs = timestamp;

    update();
    draw();
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop)



