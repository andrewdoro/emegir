"use server";

import { db } from "@/lib/drizzle";
import { notes } from "@/lib/schema";
import { JSONContent } from "novel";

export const publishPage = async ({
  title,
  slug,
  content,
}: {
  title: string;
  slug: string;
  content: JSONContent;
}) => {
  const id = await db.insert(notes).values({ title, slug, content }).returning({ id: notes.id });
  return id;
};
