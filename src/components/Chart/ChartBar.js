import React from "react";
import "./ChartBar.css";

const chartBar = (props) => {
    let barFillHeight = '0%';
    if (props.maxValue > 0){
       barFillHeight = `${math.round((props.maxValue/props.math)*100)}%` 

    }
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default chartBar;
