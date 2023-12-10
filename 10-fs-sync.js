const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// flag 'a' is to append, otherwise writefilesync will replace the contents
writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
