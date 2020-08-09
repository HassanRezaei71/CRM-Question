import React from "react";
import './EndPage.scss'
import Brand from '../../Components/Brand/Brand';
import Info from '../../Components/Info/Info';

export default function EndPage({pollData}) {
  return (
    <div className="End">
      <div className="container">
        <h1 className="title">
          با تشکر از وقتی که صرف پاسخگویی به سوالات کردید
        </h1>
        <Brand pollData={pollData} />
      </div>
      <Info />
    </div>
  );
}
