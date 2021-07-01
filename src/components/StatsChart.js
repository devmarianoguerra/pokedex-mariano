import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class StatsChart extends PureComponent {
  render() {
    const data = [];

    this.props.stats.stats.map((value) => {
      return data.push({ stats: value });
    });

    data.forEach((element) => {
      return (element.name = this.props.stats.name.map((stat) => stat));
    });

    return (
      <>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stats" fill="#0090ff" />
        </BarChart>
      </>
    );
  }
}
