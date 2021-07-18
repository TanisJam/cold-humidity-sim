let limos = createSlimes(10);

function detectCollisions(arr) {
    for (let x = 0; x < arr.length; x++) {
        for (let i = x + 1; i < arr.length; i++) {
            arr[x].getCollide(arr[i]);
        }
    }
}

function update() {
    limos.forEach(slime => {
        slime.updateTemp(temp)
        slime.updatePos();
    })
    detectCollisions(limos);
}

function draw() {
    board.innerHTML = ('');
    limos.forEach(slime => {
        board.appendChild(slime.getHtml());
    });
}


let lastFrameTimeMs = 0;
let maxFPS = 45;
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



