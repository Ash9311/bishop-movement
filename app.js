const chessBoard = document.querySelector('.chess-board');

const squares = [];

renderCB();


function renderCB() {
    for (let i = 0; i < 8; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseover', () => {
                //remove dark blue class from all sqaures
                squares.forEach(square => square.classList.remove('dark-blue'));

                //add light blue class to the hovered square
                square.classList.add('light-blue');


                //get row and col index of the hovered square
                const rowIndex = i;
                const colIndex = j;

                //highlight diagonally attacked squares
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        const currentSquare = squares[i*8+j];
                        const currentRowIndex = i;
                        const currentColIndex = j;
                        if (Math.abs(currentRowIndex - rowIndex) === Math.abs(currentColIndex - colIndex) && square != currentSquare) {
                            currentSquare.classList.add('dark-blue');
                        }

                    }
                }


            
            });

            square.addEventListener('mouseout', () => {
                squares.forEach(square => square.classList.remove('light-blue', 'dark-blue'));
            });
            row.appendChild(square);
            squares.push(square);
        }


        chessBoard.appendChild(row);
    }
}