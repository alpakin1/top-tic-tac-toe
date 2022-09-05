const boardGrid = document.getElementById('board-grid')
const button = document.querySelector('button')

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

let spaces = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]

const Player = (sign) => {
    let signAssign = () => {
        let count = 0;
        return () => {
            if (count % 2 == 0) {
                sign = 'X'
            } else if (count % 2 !== 0) {
                sign = 'O'
            }
            count++;
        }   
    }
    return {
        signAssign
    }
}

const Board = (() => {
    const renderBoardHtml = () => {
        for (let i = 0; i < spaces.length; i++) {
            if (spaces[i] == "") {
                let grid = document.createElement('button')
                grid.classList.add('field')
                boardGrid.appendChild(grid)
            } else if (spaces[i] == "x") {
                let grid = document.createElement('button')
                grid.classList.add('field')
                grid.innerText = 'X';
                boardGrid.appendChild(grid)
            } else if (spaces[i] == "o") {
                let grid = document.createElement('button')
                grid.classList.add('field')
                grid.innerText = 'O';
                boardGrid.appendChild(grid)
            }
        }
    }
    const boardClick = () => {

    }
    return {
        renderBoardHtml, boardClick
    }

})();

Board.renderBoardHtml();

const playerOne = Player('x')
