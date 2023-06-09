"use client";

import { createItem } from "@/db/item.repository";
import { useState } from "react";

const Adder = () => {
  const [itemName, setItemName] = useState("eggs");
  return (
    // @ts-ignore
    <form action={createItem} className="container flex flex-col w-64 m-5">
      <input
        name="name"
        type="text"
        className="text-red-500"
        defaultValue={"eggs"}
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit" className="rounded bg-sky-500">
        Add to Cart
      </button>
    </form>
  );
};

export default Adder;
