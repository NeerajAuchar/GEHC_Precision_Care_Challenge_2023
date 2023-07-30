import React from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    LineChart,
    Line

} from "recharts";
const Chart = () => {
    const data = [
        { name: "Facebook", users: 3 },
        { name: "Instagram", users: 8 },
        { name: "Twiter", users: 1 },
        { name: "Telegram", users: 22 },
    ];
  return (
    <div>
         <LineChart width={600} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="users" stroke="#8884d8" />

                    </LineChart>
    </div>
  )
}

export default Chart