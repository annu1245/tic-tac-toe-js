
var fstPlayerArr = ['a','b','c','d','e'];
const len = fstPlayerArr.length;

function storePlayersName() {
    for(let i=len-2; i>=0; i--){
        console.log(i);
        fstPlayerArr[i+1] = fstPlayerArr[i];
    }
    fstPlayerArr[0] = 'hi';
    console.log(fstPlayerArr);
}

storePlayersName();