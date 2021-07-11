import React, { useState, useEffect, useCallback, Fragment } from 'react';

import {checkAnswer} from "../core-components/helpers";

const TextQuestion = (question, buttons, {
    userInput,
    userAttempt,
    currentQuestionIndex,
    continueTillCorrect,
    showNextQuestionButton,
    incorrect,
    correct,
    setButtons,
    setCorrectAnswer,
    setIncorrectAnswer,
    setCorrect,
    setIncorrect,
    setShowNextQuestionButton,
    setUserInput,
    setUserAttempt
  }) => {
    const {answers, correctAnswer} = question;
    let {answerSelectionType} = question;
    const onClickAnswer = index => checkAnswer(index + 1, correctAnswer, answerSelectionType, {
      userInput,
      userAttempt,
      currentQuestionIndex,
      continueTillCorrect,
      showNextQuestionButton,
      incorrect,
      correct,
      setButtons,
      setCorrectAnswer,
      setIncorrectAnswer,
      setCorrect,
      setIncorrect,
      setShowNextQuestionButton,
      setUserInput,
      setUserAttempt
    });
  // Default single to avoid code breaking due to automatic version upgrade
  answerSelectionType = answerSelectionType || 'single';

  return answers.map((answer, index) =>
    <Fragment key={index}>
          {(buttons[index] !== undefined)
              ? (<button
                  disabled={buttons[index].disabled || false}
                  className={`${buttons[index].className} answerBtn btn`}
                  onClick={() => onClickAnswer(index)}>
                <span>{answer}</span>
              </button>)
              : <button
                  onClick={() => onClickAnswer(index)}
                  className="answerBtn btn">
               <span>{answer}</span>
              </button>
          }
        </Fragment>
  )

};

export default TextQuestion;