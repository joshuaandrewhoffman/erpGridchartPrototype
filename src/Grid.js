import React from 'react';
import './App.css';
import ReactDataGrid from 'react-data-grid';
import { parseReadableDay, parseReadableColumn } from "./Util";

function Grid(props) {
  const breakout = 'BREAKOUT';

  const columns = props.data.map(gd => {
    let day = parseReadableDay(gd.timestamp);
    return {
      key: day,
      name: day,
      editable: false
    };
  })
  columns.unshift({ key: breakout, name: breakout, editable: false });

  let rows = [];
  //for each "param in our grid, create a row with the name and data for each day"
  for (let i of props.rows) {
    //get the data for each day
    let row = {};
    for (let day of props.data) {
      row[parseReadableDay(day.timestamp)] = `${day[i]}%`;
    }
    //append the name of the param at the beginning
    row[breakout] = parseReadableColumn(i);

    rows.push(row);

  }

  return (
    <div className="Grid">
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
        minHeight={175}

      />

    </div>
  );
}

export default Grid;
