import React, { useState } from "react";

const Weapon = {
    ROCK: "ROCK",
    PAPER: "PAPER",
    SCISSORS: "SCISSORS"
};

function Game() {
    const [playerWeapon, setPlayerWeapon] = useState(null);
    const [computerWeapon, setComputerWeapon] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [result, setResult] = useState("Click on a weapon to start the game.");

    return (
        <div className="Game">
            <div className="scoreboard">
                <p className="score">Player: {playerScore} - Computer: {computerScore}</p>
            </div>
            <p className="result">{result}</p>
            <div className="weapons">
                <button>ROCK</button>
                <button>PAPER</button>
                <button>SCISSORS</button>
            </div>
        </div>
    );
}

export default Game;