import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import CustomLabel from "./components/CustomLabel";
import { GRAPH_COLORS } from "../../config";
import { formatPopulation } from "../../utils/helpers";

const BarGraph = () => {
  const state = useSelector((state: AppState) => state);
  const graphData: any[] = state.searchResults;

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        width={900}
        height={400}
        data={graphData}
        margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
      >
        <XAxis dataKey="name" fontFamily="sans-serif" dy="25" />
        <YAxis
          style={{
            fontSize: "0.7rem",
          }}
          tickFormatter={(value) => formatPopulation(value)}
        />
        <CartesianGrid vertical={false} stroke="#ebf3f0" />
        <Bar
          dataKey="population"
          barSize={170}
          fontFamily="sans-serif"
          label={<CustomLabel />}
        >
          {graphData.map((entry) => (
            <Cell
              key={entry.name}
              fill={
                // random color selection
                GRAPH_COLORS[Math.floor(Math.random() * GRAPH_COLORS.length)]
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
