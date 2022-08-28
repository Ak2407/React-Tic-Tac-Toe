import { useEffect, useState } from "react";
import { Button } from "./components/button";
import { Square } from "./components/square";

const clearState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [state, updateState] = useState(clearState);
  const [isX, updateIsX] = useState(true);
  const [congrats, updateCongrats] = useState("");

  const click = (index) => {
    if (!checkWinner()) {
      const strings = Array.from(state);
      if (strings[index]) return;
      strings[index] = isX ? "X" : "0";
      updateIsX(!isX);
      updateState(strings);
    }
  };

  const clearGame = () => {
    updateState(clearState);
    updateCongrats("");
  };

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      updateCongrats(`${winner} Won the game congratulations`);
      // clearGame();
      // alert(`${winner} Won the game Congratulations!!!!`);
    }
  }, [state]);

  const checkWinner = () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < grid.length; i++) {
      const [a, b, c] = grid[i];
      if (state[a] && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  return (
    <div className="app">
      <h1 className="heading">Welcome to Tic-Tac-Toe</h1>
      <div className="squares">
        <Square
          className="b-bottom-right"
          state={state[0]}
          onClick={() => click(0)}
        />
        <Square
          className="b-bottom-right"
          state={state[1]}
          onClick={() => click(1)}
        />
        <Square
          className="b-bottom"
          state={state[2]}
          onClick={() => click(2)}
        />
      </div>
      <div className="squares">
        <Square
          className="b-bottom-right"
          state={state[3]}
          onClick={() => click(3)}
        />
        <Square
          className="b-bottom-right"
          state={state[4]}
          onClick={() => click(4)}
        />
        <Square
          className="b-bottom"
          state={state[5]}
          onClick={() => click(5)}
        />
      </div>
      <div className="squares">
        <Square className="b-right" state={state[6]} onClick={() => click(6)} />
        <Square className="b-right" state={state[7]} onClick={() => click(7)} />
        <Square state={state[8]} onClick={() => click(8)} />
      </div>
      <Button onClick={clearGame} />
      <h1 className="winner">{congrats}</h1>
    </div>
  );
}

export default App;
