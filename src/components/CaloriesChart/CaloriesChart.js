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
      hAxis: { gridlines: { color: 'transparent'}, textPosition: 'none', baselineColor: 'transparent', gridlineColor: 'transparent' },
      vAxis: { gridlines: { color: 'transparent'}, textPosition: 'none', baselineColor: 'transparent', gridlineColor: 'transparent' },
      series: { 0: { color: '#FFCE80' } }
    };

    const chart = new window.google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }

  return (
    <div className={`${classes.CaloriesChart}`}>
      <div id={`chart_div`} style={{'width': '100%', margin: '0 auto'}}></div>

    </div>
  );
};

