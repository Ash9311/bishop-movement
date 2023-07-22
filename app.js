const chessBoard = document.querySelector('.chess-board');

const squares = document.querySelectorAll('.square');

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
                const rowIndex = Array.from(square.parentNode.children).indexOf(square);
                const colIndex = Array.from(square.parentNode.parentNode.children).indexOf(square.parentNode);

                //highlight diagonally attacked squares
                for (let i = 0; i < 8; i++) {
                    const row = document.querySelectorAll('.row')[i];
                    const squaresInRow = row.children;

                    for (let j = 0; j < 8; j++) {
                        const currentSquare = squaresInRow[j];
                        const currentRowIndex = Array.from(currentSquare.parentNode.children).indexOf(currentSquare);
                        const currentColIndex = Array.from(currentSquare.parentNode.parentNode.children).indexOf(currentSquare.parentNode);
                        if (Math.abs(currentRowIndex - rowIndex) === Math.abs(currentColIndex - colIndex) && square != currentSquare) {
                            currentSquare.classList.add('dark-blue');
                        }

                    }
                }


                square.addEventListener('mouseout', () => {
                    squares.forEach(square => square.classList.remove('light-blue', 'dark-blue'));
                });
            });


            row.appendChild(square);
        }


        chessBoard.appendChild(row);
    }
}