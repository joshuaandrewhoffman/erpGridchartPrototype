import React from 'react';
import './App.css';
import Charts from "./Charts";
import Grid from "./Grid";
import { churn, churnColumns } from "./Data";
import { parseReadableDay } from "./Util";

function App() {

  const chartData = churn.map(c => {
    const mapped = { x: parseReadableDay(c.timestamp), y: c.total };
    return mapped;
  });

  return (
    <div className="PageWrapper">
      <Charts data={chartData} />

      {/*We need to turn rows into columns to get the display we want*/}
      <Grid rows={churnColumns} data={churn} />
    </div>
  );
}

export default App;
