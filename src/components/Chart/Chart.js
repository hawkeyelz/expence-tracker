import React from "react";
import "./chart.css";
import ChartBar from "./ChartBar";

const chart = (props) => {
  const charDataValues = props.chartData.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...charDataValues);
  
  console.log(charDataValues, maxValue);
  return (
    <div className="chart">
      {props.chartData.map((dataPoint, index) => (
        <div key={index}>
          <ChartBar
            key={dataPoint.label}
            maxValue={maxValue}
            label={dataPoint.label}
            value={dataPoint.value}
          />
        </div>
      ))}
    </div>
  );
};

export default chart;
