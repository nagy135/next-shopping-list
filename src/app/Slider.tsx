"use client";

import { updateItemValue } from "@/db/item.repository";
import { useState } from "react";
import { Range } from "react-range";

interface ISlider {
  id: string;
  name: string;
  initialValue: number;
}

const Slider = ({ initialValue, name, id }: ISlider) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="m-5 flex-1">
      <h3 className="mb-5 font-semibold text-lg">{name}</h3>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={[value]}
        onChange={(values) => setValue(values[0])}
        onFinalChange={(values) => updateItemValue(id, Math.floor(values[0]))}
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
