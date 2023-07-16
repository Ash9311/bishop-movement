const chessBoard = document.querySelector('.chess-board');


renderCB();


function renderCB(){
for(let i=0;i<8;i++){
 const row = document.createElement('div');
 row.classList.add('row');

 for(let j=0;j<8;j++){
    const square = document.createElement('div');
    square.classList.add('square');

    if((i+j)%2==0){
        square.classList.add('white');
    }
    else{
        square.classList.add('black');
    }
    row.appendChild(square);
 }


 chessBoard.appendChild(row);
}
}