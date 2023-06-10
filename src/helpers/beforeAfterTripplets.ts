import { Item } from "@prisma/client";

export type TrippleData = {
  before?: {
    id: string;
    order: number;
  };
  after?: {
    id: string;
    order: number;
  };
};
type TrippletItem = Item & TrippleData;

export const beforeAfterTripplets = (items: Item[]): TrippletItem[] => {
  if (items.length <= 1) return items;

  const tripplets = items as TrippletItem[];

  // NOTE: first and last
  tripplets.at(0)!.after = {
    id: tripplets.at(1)!.id,
    order: tripplets.at(1)!.order,
  };
  tripplets.at(-1)!.before = {
    id: tripplets.at(-2)!.id,
    order: tripplets.at(-2)!.order,
  };

  // NOTE: middle ones
  for (let i = 1; i < tripplets.length - 1; i++) {
    const self = tripplets.at(i)!;
    const before = tripplets.at(i - 1)!;
    const after = tripplets.at(i + 1)!;
    self.before = {
      id: before.id,
      order: before.order,
    };
    self.after = {
      id: after.id,
      order: after.order,
    };
  }

  return tripplets;
};
