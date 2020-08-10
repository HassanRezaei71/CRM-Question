import React from "react";
import "./Stepper.scss";
import Step from "../Step/Step";
import { NavLink } from "react-router-dom";

export default function Stepper({ answers, pollData }) {
  return (
    <div className="Stepper">
      {pollData.questions.map((question) => (
        <NavLink
          activeClassName="Step-active"
          key={question.id}
          to={`/question/${question.id}`}
        >
          {answers.length && <Step answer={answers.find((item) => item.id === question.id)} />}
        </NavLink>
      ))}
    </div>
  );
}
