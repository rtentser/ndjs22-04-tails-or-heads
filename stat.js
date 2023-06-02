#!/usr/bin/env node
import { hideBin } from "yargs/helpers";
import * as fsPromises from "fs/promises";

let logFile = hideBin(process.argv)[0];
let log = await fsPromises.readFile(logFile, { encoding: "utf-8" });
let logs = log
  .split("\n")
  .filter((str) => str != "")
  .map(JSON.parse);
let total = 0;
let wins = 0;

logs.forEach((game) => {
  total++;
  if (game.number == game.guess) wins++;
});

console.log("Total games:", total);
console.log(`Wins: ${wins}, Loses: ${total - wins}`);
console.log(`Winning persent: ${(wins * 100) / total}%`);
