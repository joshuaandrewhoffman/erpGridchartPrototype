import React from 'react';
import './App.css';
import { VictoryTheme, VictoryAxis, VictoryChart, VictoryArea } from "victory";

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
        <VictoryArea
          style={{
            data: { stroke: "#0cc5cc", fill: "#BFF6F8" },
            parent: { border: "1px solid #ccc" }
          }}
          data={props.data}
        />
      </VictoryChart      >
    </div >
  );
}

export default Charts;
