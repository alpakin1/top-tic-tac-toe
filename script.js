const boardGrid = document.getElementById('board-grid')

// const Game = () => {
//     const board = Board()
//     board.renderBoardHtml
//     const initialize = () => {
//         // render start game button
//     }

//     const start = () => {
//         // render empty board
//         // create players (call factory)
//         // add event listeners
//     }
//     return {
//         initialize,
//         start
//     }
// }

// const game = Game()

// const game = (() => {
//     const board = Board()
//     board.renderBoardHtml
//     const initialize = () => {
//         // render start game button
//     }

//     const start = () => {
//         // render empty board
//         // create players (call factory)
//         // add event listeners
//     }
//     return {
//         initialize,
//         start
//     }
// }
// )();

const Player = (sign) => {  
    return {
        sign
    }
}

const Board = () => {
    let spaces = ["", "", "", "", "", "", "", "", ""]
    const renderBoardHtml = () => {
        for (let i = 0; i < spaces.length; i++) {
            if (spaces[i] == "") {
                let grid = document.createElement('button')
                grid.classList.add('field')
                boardGrid.appendChild(grid)
            }
        }
    }
    return {
        spaces, renderBoardHtml
    }

}

const board = Board()
board.renderBoardHtml();

const playerOne = Player('x')
