"use server";

import { PrismaClient, Item } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const createItem = async (name: string) => {
  await prisma.item.create({
    data: {
      name: name,
      value: 50,
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

export const getItems = async (): Promise<Item[]> => {
  return await prisma.item.findMany();
};
