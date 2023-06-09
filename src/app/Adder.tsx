"use client";

import { createItem } from "@/db/item.repository";
import { useState } from "react";

const Adder = () => {
  const [itemName, setItemName] = useState("eggs");
  return (
    <div className="flex flex-col w-1/2 mx-auto mt-10 p-3 gap-3">
      <input
        name="name"
        type="text"
        className="text-red-500 p-3 rounded text-center text-2xl font-semibold"
        defaultValue={"eggs"}
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        className="rounded bg-sky-500 p-3 text-2xl font-semibold"
        onClick={() => createItem(itemName)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Adder;
