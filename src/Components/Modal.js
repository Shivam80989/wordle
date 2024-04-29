import { useRouter } from "next/router";
import React from "react";

export default function Modal({ isCorrect, solution, turn }) {
  // const router = useRouter()

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <button onClick={() => window.location.reload()}> RESTART</button>
        </div>
      )}
    </div>
  );
}
