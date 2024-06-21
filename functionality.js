// this file contains all the checks, grid size and grid array
let size = 3;
document.documentElement.style.setProperty('--grid-size', size);
let arr = [];
let outerDiv = document.querySelector('.board')

for(let i = 0; i < size ;i++)
    for(let j = 0; j < size ; j++){
        let div = document.createElement('div')
        div.setAttribute('class','cell')
        div.setAttribute('rowIndex',i.toString())
        div.setAttribute('colIndex',j.toString())
        outerDiv.appendChild(div)
    }

// Initialize the 2D array
for (let i = 0; i < size; i++) {
    let temp = [];
    for (let j = 0; j < size; j++) {
        temp.push(" ");
    }
    arr.push(temp);
}

function checkRow(rowIndex)
{
    if(arr[rowIndex][0] != " "){
        for(let i = 1; i < size; i++){
            if((arr[rowIndex][0] != arr[rowIndex][i]))//comparing with the first one
            {
                return false
            }
        }
        return true
    }
    return false
}
function checkCol(colIndex)
{
     if(arr[0][colIndex] != " "){   
        for(let i = 1; i < size; i++){
            if((arr[0][colIndex] != arr[i][colIndex]))//comparing with the first one
            {
                return false;
            }
        }
        return true;
    }
    return false;
}
function checkMainDiagonal()
{
    if(arr[0][0] != " "){   
        for(let i = 1; i < size; i++){
            if((arr[0][0] != arr[i][i]))//comparing with the first one
            {
                return false;
            }
        }
        return true;
    }
    return false;
}
function checkSecondaryDiagonal()
{
    if(arr[0][size - 1] != " "){   
        for(let i = 1; i < size; i++){
            if((arr[0][size - 1] != arr[i ][size - i - 1]))//comparing with the first one
            {
                return false;
            }
        }
        return true;
    }
    return false;
}
