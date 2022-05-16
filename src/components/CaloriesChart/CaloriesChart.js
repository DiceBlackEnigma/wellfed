import {useEffect} from 'react';

import classes from './CaloriesChart.module.css';

export const CaloriesChart = props => {
    useEffect(() => {
    window.google.charts.load('current', {packages: ['corechart', 'line']});

  }, []);

  useEffect(() => {
    window.google.charts.setOnLoadCallback(drawBasic);

  }, [props.calories]);



  function drawBasic() {

    var data = new window.google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Dogs');

    data.addRows(props.calories);

    const options = {
      backgroundColor: 'transparent',
      legend: 'none',
      hAxis: { gridlines: { color: 'transparent'}, textPosition: 'none', baselineColor: '#FFCE80', gridlineColor: '#FFCE80' },
      vAxis: { gridlines: { color: 'transparent'}, textPosition: 'none', baselineColor: '#FFCE80', gridlineColor: '#FFCE80' },
      series: { 0: { color: '#FFCE80' } }
    };

    const chart = new window.google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }

  return (
    <div className={`${classes.CaloriesChart}`}>
      <div className={`d-flex justify-content-between`}>
        <div className={`text--yellow-tint d-flex flex-column`}>
          <span>Week {props.weeks}</span>
          <span>Total Calories {props.totalCalories}kCal</span>
        </div>

        <div className={`d-flex text--yellow-tint`} style={{width: '35%'}}>
          <span className={`bold-font`}>{props.avgCalories}</span>
          <span style={{'font-size': '10px', 'line-height': '12px'}}>average weekly calories</span>
        </div>
      </div>
      <div id={`chart_div`} style={{'width': '100%', margin: '0 auto'}}></div>
    </div>
  );
};

