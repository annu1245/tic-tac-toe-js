
function playersName() {
    fstPlayer = document.getElementById('fstPlayer').value;
    secPlayer = document.getElementById('secPlayer').value;
    startGame();
}



function startGame() {
    document.getElementById('player-names').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
    boxes.forEach(box => { box.addEventListener("click", boxClick) })
}

function boxClick() {
    if (!winner) {
        const index = this.dataset.index;
        if(this.innerText != ""){
            return;
        }
        this.innerText = currentPlayer;
        array[index] = currentPlayer;
        checkWinner();
    } else {
        alert("Game Over!");
    }
}

function checkWinner() {
    for (let i = 0; i < win.length; i++) {
        const condition = win[i];
        const box1 = array[condition[0]];
        const box2 = array[condition[1]];
        const box3 = array[condition[2]];

        if(box1 == "" || box2 == "" || box3 == "") {
            continue; 
        }

        if(box1 == box2 && box2 == box3) {
            winner = true;
            document.getElementById('currentPlayer').parentNode.innerText = `${currentPlayer == 'X' ? fstPlayer : secPlayer} won`;
            alert(currentPlayer + " won");
            return;
        }
    }

    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    document.getElementById('currentPlayer').innerText = currentPlayer;
}

document.getElementById('main-container').style.display = 'none';
const boxes = document.querySelectorAll('.box');
var fstPlayer, secPlayer, winner = false, currentPlayer = 'X';
const array = ["", "", "", "", "", "", "", "", ""];
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

var playBtn = document.getElementById('start-btn');
playBtn.addEventListener("click", playersName);
