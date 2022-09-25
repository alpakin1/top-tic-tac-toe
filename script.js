const boardGrid = document.getElementById('board-grid')

const Player = (name, marker, turn) => {

    return {
        name, marker, turn
    }
}

const playerOne = Player('alp', 'x', true)
const playerTwo = Player('not alp', 'o', false)

const gameBoard = (() => {
    let turnCount = 0
    let board = Array(9)
    const winningComps = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function winCheck () {
        let xMoves = [];
        let oMoves = [];
        for(let i = 0; i < board.length; i++){
            if(board[i] == 'x') {
                xMoves.push(board[i])
                console.log(xMoves)
            } else if(board[i] == 'o') {
                oMoves.push(board[i])
                console.log(oMoves)
            } else return
        }
        for(let i = 0; i < winningComps.length; i++) {
            if(winningComps[i] == xMoves){
                document.getElementById('wrapper').innerText = 'Player One Wins';
            } else if(winningComps[i] == oMoves){
                document.getElementById('wrapper').innerText = 'Player One Wins';
            } else return
        }
    } 

    const turnUpdate = () => {
        turnCount++;
    }
    const playerTurn = () => {
        const field = document.querySelectorAll('.field')
        field.forEach(field => {   
            field.addEventListener('click', e => {
                const currentPlayer = playerOne.turn ? playerOne : playerTwo
                const otherPlayer = !playerOne.turn ? playerOne : playerTwo
                if(e.target.textContent == '') {
                    board[e.target.id] = currentPlayer.marker;
                    field.textContent = currentPlayer.marker;
                    currentPlayer.turn = false
                    otherPlayer.turn = true
                    winCheck()
                }
            })})
        }
    return {
        turnCount, turnUpdate, board, playerTurn, winningComps, winCheck
    }
})();

gameBoard.playerTurn()


const Game = (() => {
        
})()

