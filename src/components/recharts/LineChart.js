import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Day 1', avg: 4000, pledges: 2400, amt: 2400,
  },
  {
    name: 'Day 2', avg: 3000, pledges: 1398, amt: 2210,
  },
  {
    name: 'Day 3', avg: 2000, pledges: 9800, amt: 2290,
  },
  {
    name: 'Day 4', avg: 2780, pledges: 3908, amt: 2000,
  },
  {
    name: 'Day 5', avg: 1890, pledges: 4800, amt: 2181,
  },
  {
    name: 'Day 6', avg: 2390, pledges: 3800, amt: 2500,
  },
  {
    name: 'Day 7', avg: 3490, pledges: 4300, amt: 2100,
  },
];

export default class LineChartSample extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pledges" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="avg" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
