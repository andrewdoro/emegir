"use server";

import { db } from "@/lib/drizzle";
import { notes } from "@/lib/schema";
import { JSONContent } from "novel";

export const publishPage = async ({ title, content }: { title: string; content: JSONContent }) => {
  const id = await db.insert(notes).values({ title, content }).returning({ id: notes.id });
  return id;
};
