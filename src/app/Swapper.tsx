"use client";

import { swapItemOrders } from "@/db/item.repository";
import { TrippleData } from "@/helpers/beforeAfterTripplets";

interface ISwapper {
  id: string;
  order: number;
  before: TrippleData["before"];
  after: TrippleData["after"];
}

const Swapper = ({ id, order, before, after }: ISwapper) => {
  return (
    <div className="flex ml-1 gap-1">
      <button
        disabled={!before}
        className="rounded bg-blue-500 disabled:bg-gray-500 p-3 text-xl font-semibold my-7"
        onClick={() =>
          // NOTE: null breaking, cant be clicked if null
          swapItemOrders(
            { id, order },
            { id: before!.id, order: before!.order }
          )
        }
      >
        ↑
      </button>
      <button
        disabled={!after}
        className="rounded bg-blue-500 disabled:bg-gray-500 p-3 text-xl font-semibold my-7"
        onClick={() =>
          // NOTE: null breaking, cant be clicked if null
          swapItemOrders({ id, order }, { id: after!.id, order: after!.order })
        }
      >
        ↓
      </button>
    </div>
  );
};

export default Swapper;
