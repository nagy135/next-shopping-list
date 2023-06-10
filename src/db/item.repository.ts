"use server";

import { PrismaClient, Item } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const createItem = async (name: string) => {
  const aggregateMax = await prisma.item.aggregate({
    _max: {
      order: true,
    },
  });
  await prisma.item.create({
    data: {
      name: name,
      value: 50,
      order: aggregateMax._max.order ?? 1,
    },
  });
  revalidatePath("/");
};

export const updateItemValue = async (id: string, value: number) => {
  await prisma.item.update({
    where: { id },
    data: { value },
  });
};

export const removeItem = async (id: string) => {
  await prisma.item.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};

export const getItems = async (): Promise<Item[]> => {
  return await prisma.item.findMany({
    orderBy: {
      order: "asc",
    },
  });
};
