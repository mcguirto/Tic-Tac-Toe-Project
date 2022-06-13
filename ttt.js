const reset = document.querySelector('#reset')
const getCell = document.querySelector('.cell')

//let count = 1

 //count.addEventListener('click', countAdd)

// const countAdd = () => {
//     count += 1;
// } 
const playerX = 'X'
const playerO = 'O'
const winConditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [3,6,9],
    [1,5,8],
    [3,5,7]
]
//these are all the winning possibilities. We will use if/else when emplementing the
//draw conditions. This is crucial as there are 9! (9 factorial) possible
//ways to decide a tic tac toe game

const cells = document.querySelector(`#cell${i}`)
const board = document.getElementById('container')
const winMessage = document.getElementById('winCon')
const resetButton = document.getElementById('reset')
const winConMessage = document.getElementById('winConMessage')
let playerOTurn = false //this will allow X to go first
// function addRound(){
//     turnCounter += 1;
// }
//look for clicks
//when someone clicks the existing square
//it will feed the click event into the existing square function

//Start the game

startGame() //function call to star6t the game

resetButton.addEventListener('click', startgame) //this will listen for a click
//for the start button, clear the board and start a new game
//startGame function
const startGame = () => {
    let playerOTurn = false //this will start with Player X
    //use forEach to execute a function once for each array element
    cells.forEach(cell =>{
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
        cell.removeEventListener('click', fillCell)
        cell.addEventListener('click', filCell, { once: true})
    })
    winMessage.classList.remove('show')
}

const fillCell = (event) =>{
    const cell =event.target
    const currentPlayer = playerOTurn ? playerO : playerX
    //checks the condition of playerO's turn. if it's true
    //it is player O's turn, if not, then it is player X's turn
    //the ? or 'ternary operator' allows for three conditions over two
    //thank you mdn
    placeMark(cell,currentPlayer)
    if (checkWinCon(currentPlayer)){
        gameOver(false)
    }else if(isDraw()){
        gameOver(true)
    }else{
        changePlayer()
    }
}

//first ending condition

const gameOver = (draw) => {
    if (draw){
        winConMessage.innerText = 'Cats game! Meow!'
    }else{
        winConMessage.innerText = `Player ${playerOTurn ? "O's" : "X's"} wins!`
    }
    winMessage.classList.add('show')
}

// const changeColor = (event) => {
//     //event is all the information of the click
//     //event.target will tell what was clicked on
//     const existingSquare = event.target
//     existingSquare.style.backgroundColor = 'blue'; //change the background color
//     console.log('hi')
// }
// for (i = 1; i <= 9; i++) {
//     document.querySelector(`#cell${i}`).addEventListener('click', changeColor)
// }

//1. tell some part of the page to pay attention to clicks
//2. create a function that tells the page what to do when clicked