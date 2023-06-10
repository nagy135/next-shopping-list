"use client";

import { useState } from "react";
import { Range } from "react-range";

interface ISlider {
  name: string;
  initialValue: number;
}

const Slider = (props: ISlider) => {
  const [value, setValue] = useState(props.initialValue);
  return (
    <div className="m-5">
      <h3 className="mb-5">{props.name}</h3>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={[value]}
        onChange={(values) => setValue(values[0])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              backgroundColor: "#c22330",
            }}
          />
        )}
      />
    </div>
  );
};

export default Slider;
