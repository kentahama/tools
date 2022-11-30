#!/usr/bin/env -S deno run
import { readLines } from "https://deno.land/std@0.166.0/io/mod.ts";
import pick from "https://deno.land/x/lodash@4.17.15-es/pick.js";

const keys = Deno.args;

for await (const line of readLines(Deno.stdin)) {
  const d = JSON.parse(line);
  if (d) {
    if (keys.length > 0) console.log(pick(d, keys));
    else console.log(d);
  }
}
