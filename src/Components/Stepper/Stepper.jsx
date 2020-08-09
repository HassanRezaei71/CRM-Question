import React from "react";

export default function Stepper({ answers, pollData }) {
  return (
    <div className="Stepper">
      {pollData.questions.map((question) => (
        <NavLink activeClassName="Step-active" key={question.id} to={`/question/${question.id}`}>
          <Step answer={answers.find((item) => item.id == question.id)} />
        </NavLink>
      ))}
    </div>
  );
}
