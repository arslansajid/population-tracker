import React from "react";
import { formatPopulation } from "../../../utils/helpers";

interface Props {}

const CustomLabel: React.FC<Props> = (props: any) => {
  const { x, y, fill, value } = props;
  return (
    <text
      x={x}
      y={y}
      dy={-4}
      fontSize="16"
      fontFamily="sans-serif"
      fill={fill}
      textAnchor="left"
    >
      {formatPopulation(value)}
    </text>
  );
};

export default CustomLabel;
