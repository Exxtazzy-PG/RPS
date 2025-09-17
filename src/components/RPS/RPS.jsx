import React, { useState } from "react";
import "./RPS.css";

function RPS() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("Draw!");
      setScore({ ...score, draws: score.draws + 1 });
    } else if (
      (choice === "Rock" && compChoice === "Scissors") ||
      (choice === "Paper" && compChoice === "Rock") ||
      (choice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You Win!");
      setScore({ ...score, wins: score.wins + 1 });
    } else {
      setResult("You Lose!");
      setScore({ ...score, losses: score.losses + 1 });
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setScore({ wins: 0, losses: 0, draws: 0 });
  };

  return (
    <div className="rps-container">
      <h1>Rock Paper Scissors</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>

      <div className="results">
        <p>Your choice: {playerChoice || "—"}</p>
        <p>Computer choice: {computerChoice || "—"}</p>
        <h2>{result}</h2>
      </div>

      <div className="scoreboard">
        <p>Wins: {score.wins}</p>
        <p>Losses: {score.losses}</p>
        <p>Draws: {score.draws}</p>
      </div>

      <button className="reset-btn" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default RPS;
