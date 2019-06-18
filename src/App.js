import React from 'react';
import './App.css';
import Charts from "./Charts";
import Grid from "./Grid";
import { churn, churnColumns } from "./Data";
import { parseReadableDay } from "./Util";
import { Container, Segment } from 'semantic-ui-react'

function App() {
  const chartData = churn.map(c => {
    const mapped = { x: parseReadableDay(c.timestamp), y: c.total };
    return mapped;
  });

  return (
    <div className="PageWrapper">
      <Container>
        <Segment>
          <Charts data={chartData} />

          {/*We need to turn rows into columns to get the display we want*/}
          <Grid rows={churnColumns} data={churn} />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
