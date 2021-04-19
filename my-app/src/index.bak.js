import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function calculateWiner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(var line of lines) {
        const [a, b, c] = line;
        if(squares[a] && (squares[a] === squares[b] && squares[a] === squares[c])) {
            return squares[a]
        }
    }
    return null;
}

class Square extends React.Component {
    render() {
        return (
            <button 
                className='square'
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component{
    calculateWiner() {
        let squares = this.state.squares.slice()
        const winner = calculateWiner(squares);

        if(winner) {
            console.log()
        }
    }
    renderSquare(i) {
        return (
            <Square value={this.props.squares[i]} onClick={() => {this.props.play(i)}}>
            </Square>
        )
    }
    render() {
        const winner = calculateWiner(this.props.squares);
        let status = '';
        if(winner) {
            status = `winner is ${winner}`
        }else{
            status = 'Next player: ' + `${this.props.isNextX ? 'X' : 'O'}` 
        }

        return (
            <div>
                <div className='sttus'>{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div> 
            
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        // console.log(11111111111111111111111, this)
        this.state = {
            stepNumber: 0,
            isNextX: true,
            history: [
                {
                    squares: Array.from({length: 9}).fill(null)
                }
            ]
        }
    }
    player(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1]
        const squares = current.squares.slice();
        
        if(squares[i] || calculateWiner(squares)) return;

        squares[i] = this.state.isNextX ? 'X' : 'O'

        history.push({squares})

        this.setState({
            stepNumber: history.length - 1,
            history,
            isNextX: !this.state.isNextX
        })
    }
    jumpTo(move) {
        this.setState({ stepNumber: move, isNextX:( move % 2) === 0})
    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const steps = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li>
                    <button key={move.toString()} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        isNextX={this.state.isNextX}
                        squares={current.squares}
                        play={this.player.bind(this)}
                    />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{steps}</ol>
                </div>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));



// const element = <h1>h1</h1>

// ReactDOM.render(element, document.getElementById("root"))




// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);