import React from "react";
import "./StartPage.scss";
import Button from "../../Components/Button/Button";
import Info from "../../Components/Info/Info";
import Brand from "../../Components/Brand/Brand";
import { Link } from "react-router-dom";
export default function StartPage({ pollData }) {
  return (
    <div className="first-page">
      <div className="title-container">
        <h1>فرم نظر سنجی و ارتقا سطح خدمات رسانی</h1>
        <Brand pollData={pollData} />
        <Link to={`/question/${pollData.questions[0].id}`}>
          <Button>شروع</Button>
        </Link>
      </div>
      <Info />
    </div>
  );
}
