import React, { useState, useEffect } from "react";
import "./App.css";
import initialPollData from "./Data/initialPollData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Routes/routes";

export default function App() {
  const [pollData, setPollData] = useState(initialPollData);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const Answers = pollData.questions.map((question) => {
      return { id: question.id, answer: null };
    });
    setAnswers(Answers);
  }, []);

  const setNewAnswer = (questionId, answerKey) => {
    let newAnswer = [...answers].map((item) =>
      item.id === questionId ? { id: questionId, answer: answerKey } : item
    );
    setAnswers(newAnswer);
  };

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route path={route.path} key={route.path} exact={route.exact}>
            <route.component pollData={pollData} setPollData={setPollData} setNewAnswer={setNewAnswer} answers={answers} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

