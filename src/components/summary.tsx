"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    items: 35,
  },
  {
    name: "February",
    items: 130,
  },
  {
    name: "March",
    items: 33,
  },
  {
    name: "April",
    items: 10,
  },
  {
    name: "May",
    items: 33,
  },
  {
    name: "June",
    items: 10,
  },
  {
    name: "July",
    items: 40,
  },
];

function Summary() {
  return (
    <div>
      <h2 className="mb-10 text-2xl font-semibold">Monthly Summary</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line
            type="monotone"
            dataKey="items"
            stroke="#F9A109"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Summary;
