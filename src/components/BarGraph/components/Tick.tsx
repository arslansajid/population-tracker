import React from "react";

const Tick: React.FC<any> = ({
  payload: { value },
  verticalAnchor,
  visibleTicksCount,
  ...rest
}) => (
  <text {...rest} className="bar-chart-tick" dy={12}>
    {value}
  </text>
);

export default Tick;
