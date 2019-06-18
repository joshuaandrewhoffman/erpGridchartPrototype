import React from 'react';
import './App.css';
import Charts from "./Charts";
import Grid from "./Grid";
import { churn, churnColumns } from "./Data";
import { parseReadableDay } from "./Util";
import { Header, Container, Segment, Statistic } from 'semantic-ui-react'

function App() {
  const chartData = churn.map(c => {
    const mapped = { x: parseReadableDay(c.timestamp), y: c.total };
    return mapped;
  });

  const currentChurn = `${churn.slice(-1)[0].total}%`;
  return (

    <div className="PageWrapper">
      <Container>
        <Header as='h1' className="title">Revenue Churn</Header>
        <Segment>
          <Statistic>
            <Statistic.Label>REVENUE CHURN</Statistic.Label>
            <Statistic.Value>{currentChurn}</Statistic.Value>
          </Statistic>


          <span>{}</span>
          <Charts data={chartData} />

          {/*We need to turn rows into columns to get the display we want*/}
          <Grid rows={churnColumns} data={churn} />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
