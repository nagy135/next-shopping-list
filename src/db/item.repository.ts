"use server";

import { PrismaClient, Item } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

type ItemAction = Pick<Item, "name">;

const parseItemActionPayload = (payload: FormData): ItemAction => {
  return {
    name: payload.get("name") as string,
  };
};

export const createItem = async (payload: FormData) => {
  const itemAction = parseItemActionPayload(payload);
  await prisma.item.create({
    data: {
      name: itemAction.name,
      value: 50,
    },
  });
  revalidatePath("/");
};

export const getItems = async (): Promise<Item[]> => {
  return await prisma.item.findMany();
};
