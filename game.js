let boxes = document.querySelectorAll('.box');
let currentPlayer = 'x';
const array = ["", "", "", "", "", "", "", "", ""];
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

main();


function main() {
    boxes.forEach(box => { box.addEventListener("click", boxClick) })

}

function boxClick() {
    const index = this.dataset.index;
    if(this.innerText != ""){
        return;
    }
    this.innerText = currentPlayer;
    array[index] = currentPlayer;
    checkWinner();
}



function checkWinner() {
    let winner = false;
    for (let i=0; i<win.length; i++) {
        const condition = win[i];
        const box1 = array[condition[0]];
        const box2 = array[condition[1]];
        const box3 = array[condition[2]];

        if(box1=="" || box2=="" || box3==""){
            continue; 
        }

        if(box1 == box2 && box2 == box3) {
            winner = true;
        }
    }
    if(winner) {
        alert(currentPlayer + " won");
    }else{
        currentPlayer == 'x' ? currentPlayer = '0' : currentPlayer = 'x';
    }
}

