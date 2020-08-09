import React from 'react';
import './AnswerButton.scss'

export default function AnswerButton({children,AnswerButtonHandler,answerKey}) {
    return (
    <button className="answer-button" onClick={()=>AnswerButtonHandler(answerKey)}>{children}</button>
    )
}
