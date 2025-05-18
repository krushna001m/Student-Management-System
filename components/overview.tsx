"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 94.2,
  },
  {
    name: "Feb",
    total: 92.8,
  },
  {
    name: "Mar",
    total: 93.5,
  },
  {
    name: "Apr",
    total: 91.7,
  },
  {
    name: "May",
    total: 90.4,
  },
  {
    name: "Jun",
    total: 92.5,
  },
  {
    name: "Jul",
    total: 93.8,
  },
  {
    name: "Aug",
    total: 94.6,
  },
  {
    name: "Sep",
    total: 92.9,
  },
  {
    name: "Oct",
    total: 91.2,
  },
  {
    name: "Nov",
    total: 93.1,
  },
  {
    name: "Dec",
    total: 90.8,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          domain={[85, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          formatter={(value) => [`${value}%`, "Attendance Rate"]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Bar dataKey="total" fill="#16a34a" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
