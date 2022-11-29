#!/usr/bin/env -S deno run
import { readLines } from "https://deno.land/std@0.166.0/io/mod.ts";

for await (const line of readLines(Deno.stdin)) {
  const d = JSON.parse(line);
  if (d) {
    console.log(d);
  }
}
