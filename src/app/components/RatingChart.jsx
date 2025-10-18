"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RatingChart({ ratings }) {
  return (
    <div style={{ width: "100%", height: 150 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ratings} layout="vertical">
          <XAxis type="number" hide />
          <YAxis dataKey="rating" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#3F2010" radius={[5, 5, 5, 5]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
