import React from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  Title,
  Legend,
  PieSeries,
  Tooltip
} from 'react-jsx-highcharts';

const piestyle = {
  flex: '1 0 0%',
  height: '80vh',
  maxWidth: '800px',
  width: '98vw'
};

const PieChart = props => {
  const tooltipFormatter = function() {
    return `${this.key}: <br/> ${this.point.percentage.toFixed(2)} %`;
  };
  return (
    <div style={piestyle}>
      <HighchartsChart>
        <Chart />

        <Title>Time In Zone</Title>

        <Legend />
        <PieSeries
          id="total-consumption"
          name="Total consumption"
          data={props.entries}
          showInLegend={true}
        />
        <Tooltip formatter={tooltipFormatter} />
      </HighchartsChart>
    </div>
  );
};

export default withHighcharts(PieChart, Highcharts);
