CREATE TABLE IF NOT EXISTS "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" json NOT NULL
);
