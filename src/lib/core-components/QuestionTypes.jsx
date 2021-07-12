import React, { useState, useEffect, useCallback, Fragment } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import { checkAnswer } from "../core-components/helpers";

export const TextQuestion = (question, buttons, {
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
    const { answers, correctAnswer } = question;
    let { answerSelectionType } = question;
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

export const PictureQuestion = (question, buttons, {
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
    const { answers, correctAnswer } = question;
    let { answerSelectionType } = question;
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
                    className={`${buttons[index].className} answer-picture-btn btn`}
                    onClick={() => onClickAnswer(index)}
                >
                    <div className="question-picture-item">
                        <img src={answer} alt="image" />
                    </div>
                </button>)
                : <button
                    onClick={() => onClickAnswer(index)}
                    className="answer-picture-btn btn"
                >
                    <div className="question-picture-item">
                        <img src={answer} alt="image" />
                    </div>
                </button>
            }
        </Fragment>
    )
};

export const CodeQuestion = (question, buttons, {
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
    let codeInput = "function my_array() { let _array = [1,2,3,4]; } ";
    const { answers, correctAnswer } = question;
    let { answerSelectionType } = question;
    const onClickAnswer = () => {

        console.log(codeInput);

        const currentlyAnswer = (new Date().getMilliseconds() % 2) + 1;
        
        return checkAnswer(currentlyAnswer, correctAnswer, answerSelectionType, {
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
    };
    // Default single to avoid code breaking due to automatic version upgrade
    answerSelectionType = answerSelectionType || 'single';

    return (
        <div>
            <div id="blah2"></div>
            <AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  theme="github"
  name="blah2"
//   onLoad={this.onLoad}
  onChange={(newValue) => {codeInput = newValue}}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={codeInput}
  setOptions={{
  showLineNumbers: true,
  tabSize: 2,
  useWorker: false
  }}/>
        
            {/* <textarea defaultValue={codeInput} onChange={(event) => {codeInput = event.target.value}} rows={6} /> */}
            <button
                    onClick={() => onClickAnswer(codeInput)}
                    className="answerBtn btn"
                >
                   <span>Submit</span>
                </button>
        </div>);

    return answers.map((answer, index) =>
        <Fragment key={index}>
            {(buttons[index] !== undefined)
                ? (<button
                    disabled={buttons[index].disabled || false}
                    className={`${buttons[index].className} answer-picture-btn btn`}
                    onClick={() => onClickAnswer(index)}
                >
                    <div className="question-picture-item">
                        <img src={answer} alt="image" />
                    </div>
                </button>)
                : <button
                    onClick={() => onClickAnswer(index)}
                    className="answer-picture-btn btn"
                >
                    <div className="question-picture-item">
                        <img src={answer} alt="image" />
                    </div>
                </button>
            }
        </Fragment>
    )
};
