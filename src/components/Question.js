import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // If time runs out
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset for next question
      onAnswered(false); // User didn't answer in time
      return;
    }

    // Decrease timer every second
    const timeoutId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered]);

  function handleAnswerClick(isCorrect) {
    setTimeRemaining(10); // Reset for next question
    onAnswered(isCorrect); // Report result
  }

  return (
    <div className="question">
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerClick(index === question.correctIndex)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
