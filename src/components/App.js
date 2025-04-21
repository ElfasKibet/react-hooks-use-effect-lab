import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    prompt: "What is the capital of France?",
    answers: ["Berlin", "London", "Paris", "Rome"],
    correctIndex: 2,
  },
  {
    prompt: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctIndex: 1,
  },
  {
    prompt: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
    correctIndex: 0,
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <h1>Trivia Time! 🧠</h1>
      {currentQuestion ? (
        <Question question={currentQuestion} onAnswered={handleAnswer} />
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>
            Your score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
