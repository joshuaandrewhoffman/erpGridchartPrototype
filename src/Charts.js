import React from 'react';
import './App.css';
import { VictoryTheme, VictoryAxis, VictoryChart, VictoryLine } from "victory";

function Charts(props) {
  return (
    <div className="Charts">

      <VictoryChart
        theme={VictoryTheme.material}
        height={300}
        width={600}
        padding={{ top: 10, bottom: 50, left: 30, right: 20 }}
      >
        <VictoryAxis />
        <VictoryAxis dependentAxis tickFormat={(tick) => `${Math.round(tick)}%`} />
        <VictoryLine
          style={{
            data: { stroke: "#0cc5cc" },
            parent: { border: "1px solid #ccc" }
          }}
          data={props.data}
        />
      </VictoryChart      >
    </div >
  );
}

export default Charts;
