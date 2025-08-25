let activePlayer = 'X';
let selectedSquares = [];

function placeXOrO(squareNumber) {
    let square = document.getElementById(squareNumber);
    if (square.innerHTML !== '' || selectedSquares.includes(squareNumber + activePlayer)) return;

    const img = document.createElement('img');
    img.src = activePlayer === 'X' ? '../images/X.png' : '../images/O.png';
    img.style.width = '100%';
    img.style.height = '100%';
    square.appendChild(img);

    selectedSquares.push(squareNumber + activePlayer);

    audio('../media/place.mp3');

    if (checkWinConditions()) return;

    if (selectedSquares.length >= 9) {
        audio('../media/tieGame.mp3');
        setTimeout(() => alert("It's a tie!"), 200);
        disableClick();
        setTimeout(resetGame, 2000);
        return;
    }

    activePlayer = activePlayer === 'X' ? 'O' : 'X';
}

function checkWinConditions() {
    const winCombos = [
        ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
        ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
        ['0', '4', '8'], ['2', '4', '6']
    ];

    for (let [a, b, c] of winCombos) {
        if (
            selectedSquares.includes(a + activePlayer) &&
            selectedSquares.includes(b + activePlayer) &&
            selectedSquares.includes(c + activePlayer)
        ) {
            drawWinLine(a, c);
            audio('../media/winGame.mp3');
            disableClick();
            setTimeout(resetGame, 3000);
            return true;
        }
    }
    return false;
}

function drawWinLine(start, end) {
    const coords = {
        '0': [100, 100], '1': [304, 100], '2': [508, 100],
        '3': [100, 304], '4': [304, 304], '5': [508, 304],
        '6': [100, 508], '7': [304, 508], '8': [508, 508]
    };
    const canvas = document.getElementById('win-lines');
    const ctx = canvas.getContext('2d');
    const [x1, y1] = coords[start];
    const [x2, y2] = coords[end];

    let x = x1, y = y1;

    function animateLine() {
        const step = 10;
        ctx.clearRect(0, 0, 608, 608);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x, y);
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'red';
        ctx.stroke();

        if (Math.abs(x - x2) > step || Math.abs(y - y2) > step) {
            x += (x2 - x1) / 20;
            y += (y2 - y1) / 20;
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();
}

function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
    }, 3000);
}

function audio(url) {
    let sound = new Audio(url);
    sound.play();
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
    }
    selectedSquares = [];
    document.getElementById('win-lines').getContext('2d').clearRect(0, 0, 608, 608);
    activePlayer = 'X';
}
