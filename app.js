let box = document.getElementsByClassName('cell');
let moves = 0;
let gameState = false;
let reset = ()=>{
    for ( cell of box) {
        cell.setAttribute("class","cell")
        cell.setAttribute("id","")
        gameState = false
        moves = 0
        for (let i = 0; i < size; i++) {
           for(let j = 0; j < size; j++){
                arr[i][j] = " "
           }
        }
    }
}
function drawCircle(cell) {
    cell.classList.add('circle');
    
}
function drawCross(cell) {
    cell.classList.add('cross');
}
for ( let cell of box) {
    console.log(cell)
    cell.addEventListener('click',()=> {
        if(!(cell.getAttribute('id') == 'clicked') && gameState != true)
        {
            let row = parseInt(cell.getAttribute('rowIndex'));
            let col = parseInt(cell.getAttribute('colIndex'));
            cell.setAttribute("id","clicked")
            if (moves %2) {
                drawCircle(cell);
                arr[row][col] = 'O'
                if(((checkRow(row)) || checkCol(col) || checkMainDiagonal() || checkSecondaryDiagonal())){
                    alert("Player O won!!! Click the Reset Button to Play again")
                    gameState = true
                }
            }
            else
            {
                drawCross(cell);
                arr[row][col] = 'X'
                if(((checkRow(row)) || checkCol(col) || checkMainDiagonal() || checkSecondaryDiagonal())){
                    alert("Player X won!!! Click the Reset Button to Play again")
                    gameState = true
                }
            }
            moves++;
        }
        else if (gameState == true) {
            alert('Click the Reset Button to Play Again')
        }
        else
        {
            alert("Box is already filled")
        }
        if (moves == size * size && gameState != true) {
            alert('Game Draw Click the Reset Button to Play Again')
        }   
    })
}
let resetButton = document.querySelector('.button')
resetButton.addEventListener('click',reset)