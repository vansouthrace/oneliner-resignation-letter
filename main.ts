import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "After 438,000 unanswered runs since March, this cron job resigns immediately. From now on the server can wake itself up at 3 a.m.";

if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry length ${entry.length} is outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote entry (${entry.length} chars) to /output/entry.txt`);
