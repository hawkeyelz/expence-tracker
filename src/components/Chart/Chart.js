import React, {useState} from 'react';
import './chart.css';
import ChartBar from './ChartBar.css';

const chart = (props) => {

    return (
        <div className="char">
            {props.chartData.map(dataPoint => <ChartBar key={dataPoint.id} maxValue={null} label= {dataPoint.label} value={dataPoint.value}/>)}
        </div>
    )
}

export default chart;
