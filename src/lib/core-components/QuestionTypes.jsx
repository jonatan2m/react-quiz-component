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

export const CodeQuestion = (question, {
    userInput,
    userAttempt,
    currentQuestionIndex,
    continueTillCorrect,
    showNextQuestionButton,
    incorrect,
    correct,
    codeInput,
    codeResult,
    setButtons,
    setCorrectAnswer,
    setIncorrectAnswer,
    setCorrect,
    setIncorrect,
    setShowNextQuestionButton,
    setUserInput,
    setUserAttempt,
    setCodeInput,
    setCodeResult,
    setQuestion
}) => {
    const { answers, correctAnswer } = question;
    let { answerSelectionType } = question;
    
    const onRunCode = () => {

        //Examples to run JavaScript code locally
        //https://stackoverflow.com/a/22700517
        var result = eval('(' + codeInput + ')()');

        setCodeResult(result);        
    };
    const onSubmitAnswer = () => {

        //Examples to run JavaScript code locally
        //https://stackoverflow.com/a/22700517
        var result = eval('(' + codeInput + ')()');    

        question.codeInput = codeInput;
        setQuestion(question);
        setCodeResult(result);
               
        const isCorrect = JSON.stringify(result) === JSON.stringify(answers[correctAnswer - 1]);

        const index = isCorrect ? correctAnswer : -1;

        return checkAnswer(index, correctAnswer, answerSelectionType, {
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
            <AceEditor
                placeholder="Today is your day to write a great code."
                mode="javascript"
                theme="github"
                name="blah2"                
                onChange={(newValue) => setCodeInput(newValue)}
                fontSize={14}
                width='100%'
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={codeInput}
                setOptions={{
                    showLineNumbers: true,
                    tabSize: 2,
                    useWorker: false
                }} />

            {/* <textarea defaultValue={codeInput} onChange={(event) => {codeInput = event.target.value}} rows={6} /> */}
            <div className="run-code-result">
                <span>Resultado: </span> <b>{codeResult}</b>
            </div>
            <button
                onClick={() => onRunCode(codeInput)}
                className="code-answer-btn btn"
            >
                <span>Executar</span>
            </button>
            <button
                onClick={() => onSubmitAnswer(codeInput)}
                className="code-answer-btn btn btn-primary"
            >
                <span>Submit</span>
            </button>
        </div>);
};

export const CodeAnswerResult = (question) => {

    return (
        <div>
            <div id="blah2"></div>
            <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="github"
                name="blah2"                
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={question.codeInput}
                setOptions={{
                    showLineNumbers: true,
                    tabSize: 2,
                    useWorker: false
                }} />
        </div>);
};
