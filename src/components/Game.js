import React, { useState, useEffect, useDebugValue } from "react";

const Weapon = {
    ROCK: "ROCK",
    PAPER: "PAPER",
    SCISSORS: "SCISSORS"
};

function Game() {
    // Initialize state variables
    const [playerWeapon, setPlayerWeapon] = useState(null);
    const [computerWeapon, setComputerWeapon] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [result, setResult] = useState("Choose a weapon below to start the game.");

    function computerChoose() {
        let num = Math.floor(Math.random() * 3) + 1; // random number between 1 and 3

        switch(num){
            case 1:
                setComputerWeapon(Weapon.ROCK);
                break;
            case 2:
                setComputerWeapon(Weapon.PAPER);
                break;
            case 3:
                setComputerWeapon(Weapon.SCISSORS);
                break;
        }
    }

    function playerChoose(weapon) {
        setPlayerWeapon(weapon);
    }

    // Game plays after player chooses weapon
    useEffect(() => play(), [playerWeapon]);

    function play() {
        // Computer chooses weapon
        computerChoose();

        // Determine winner of the round and update result message and scores
        if(playerWeapon === Weapon.ROCK){
            if(computerWeapon === Weapon.PAPER){
                setResult("Computer Wins. " + computerWeapon + " beats " + playerWeapon + ".");
                setComputerScore(computerScore + 1);
            }
            else if(computerWeapon === Weapon.SCISSORS){
                setResult("Player Wins! " + playerWeapon + " beats " + computerWeapon + "!");
                setPlayerScore(playerScore + 1);
            }
            else{
                setResult("It was a tie.");
            }

            setPlayerWeapon(null);
        }
        else if(playerWeapon === Weapon.PAPER){
            if(computerWeapon === Weapon.ROCK){
                setResult("Player Wins! " + playerWeapon + " beats " + computerWeapon + "!");
                setPlayerScore(playerScore + 1);
            }
            else if(computerWeapon === Weapon.SCISSORS){
                setResult("Computer Wins. " + computerWeapon + " beats " + playerWeapon + ".");
                setComputerScore(computerScore + 1);
            }
            else{
                setResult("It was a tie.");
            }

            setPlayerWeapon(null);
        }
        else if(playerWeapon === Weapon.SCISSORS){
            if(computerWeapon === Weapon.ROCK){
                setResult("Computer Wins. " + computerWeapon + " beats " + playerWeapon + ".");
                setComputerScore(computerScore + 1);
            }
            else if(computerWeapon === Weapon.PAPER){
                setResult("Player Wins! " + playerWeapon + " beats " + computerWeapon + "!");
                setPlayerScore(playerScore + 1);
            }
            else{
                setResult("It was a tie.");
            }

            setPlayerWeapon(null);
        }
    }

    return (
        <div className="Game">
            <div className="scoreboard">
                <p className="score">Player: {playerScore} - Computer: {computerScore}</p>
            </div>
            <p className="result">{result}</p>
            <div className="weapons">
                <button onClick={() => playerChoose(Weapon.ROCK)}>ROCK</button>
                <button onClick={() => playerChoose(Weapon.PAPER)}>PAPER</button>
                <button onClick={() => playerChoose(Weapon.SCISSORS)}>SCISSORS</button>
            </div>
        </div>
    );
}

export default Game;