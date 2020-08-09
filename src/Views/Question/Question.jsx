import React, { useState, useEffect } from "react";
import "./Question.scss";
import Stepper from "../../Components/Stepper/Stepper";
import { useParams, useHistory } from "react-router-dom";
import AnswerButton from "../../Components/AnswerButton/AnswerButton";
import Brand from "../../Components/Brand/Brand";
import Info from "../../Components/Info/Info";

export default function Question({ pollData, answers, setNewAnswer }) {
  const { id } = useParams();
  console.log(id);
  const history = useHistory();


  const [question, setQuestion] = useState(pollData.questions.find((item) => item.id === id));

  const [questionIndex, setQuestinoIndex] = useState(pollData.questions.findIndex((item) => item.id === id));

  useEffect(() => {
    setQuestion(pollData.questions.find((item) => item.id === id));
    setQuestinoIndex(pollData.questions.findIndex((item) => item.id === id));
  }, [id]);

  const AnswerButtonHandler = (answerKey) => {
    setNewAnswer(id, answerKey);
    if (pollData.questions[questionIndex + 1]) {
      history.push(`/question/${pollData.questions[questionIndex + 1].id}`);
    } else {
      history.push("/end");
    }
  };

  return (
    <div className="question">
      <Stepper pollData={pollData} answers={answers} />
      <div className="container">
        <h1 className="title">{question.text}</h1>
        <div className="button">
          {question.options.map((item) => (
            <AnswerButton
              AnswerButtonHandler={AnswerButtonHandler}
              key={item.key}
              answerKey={item.key}
            >
              {item.text}
            </AnswerButton>
          ))}
        </div>
      </div>
      <footer>
        <Info />
        <Brand pollData={pollData} />
      </footer>
    </div>
  );
}
