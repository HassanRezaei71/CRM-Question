import React from "react";
import "./Step.scss";

export default function Step({ answer }) {
  return <div className={answer.answer !== null ? "step-done" : "step"}></div>;
}
