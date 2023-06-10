"use client";

import { removeItem } from "@/db/item.repository";

interface IDeleter {
  id: string;
}

const Deleter = ({ id }: IDeleter) => {
  return (
    <button
      className="rounded bg-red-500 p-3 text-xl font-semibold my-7"
      onClick={() => removeItem(id)}
    >
      ×
    </button>
  );
};

export default Deleter;
