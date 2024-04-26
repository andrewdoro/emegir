import { db } from "@/lib/drizzle";
import React from "react";

export const dynamic = "force-static";
const Slug = async ({ params }: { params: { slug: string } }) => {
  const note = await db.query.notes.findFirst({
    where: (note, { eq }) => eq(note.slug, params.slug),
  });
  return <div>{note?.title}</div>;
};

export default Slug;
