#!/usr/bin/env node
import * as readline from "node:readline/promises";
import { hideBin } from "yargs/helpers";
import * as fsPromises from "fs/promises";

let logFile = hideBin(process.argv)[0];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = Math.floor(Math.random() * 2) + 1;
let guess = await rl.question("Please guess tails (1) or heads (2): ");

if (+guess == number) console.log("You right!");
else console.log("You wrong!");

await fsPromises.appendFile(
  logFile,
  JSON.stringify({ number: number, guess: +guess }) + "\n"
);

rl.close();
