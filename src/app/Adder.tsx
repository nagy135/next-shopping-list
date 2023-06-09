"use client";

import { createItem } from "@/db/item.repository";
import { useState } from "react";

const Adder = () => {
  const [itemName, setItemName] = useState("eggs");
  return (
    // @ts-ignore
    <div className="container flex flex-col w-64 m-5">
      <input
        name="name"
        type="text"
        className="text-red-500"
        defaultValue={"eggs"}
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        className="rounded bg-sky-500"
        onClick={() => createItem(itemName)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Adder;
