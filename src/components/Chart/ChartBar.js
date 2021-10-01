import React from "react";
import './ChartBar.css';


const chartBar = (props) => {
    let barFillHeight = '0px';
    console.log(props.value);
    if (props.value > 0){
       barFillHeight = `${Math.round((props.maxValue/props.value)*10)}%`  
      }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}>

        </div>
      </div>
      <div className="chart-bar__label">
        {props.label}
      </div>
    </div>
  );
};

export default chartBar;
