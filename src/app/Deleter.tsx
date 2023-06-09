"use client";

import { removeItem } from "@/db/item.repository";

interface IDeleter {
  id: string;
}

const Deleter = ({ id }: IDeleter) => {
  return (
    <button
      className="rounded bg-red-500 p-3 font-semibold my-3"
      onClick={() => removeItem(id)}
    >
      X
    </button>
  );
};

export default Deleter;
