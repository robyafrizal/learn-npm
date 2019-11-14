const cowsay = require("cowsay");
const chalk = require("chalk");
const supervillains = require("supervillains");
const sinsay = require("sinsay");
const yosay = require("yosay");
const yodasay = require("yodasay");

const supervillainsName = supervillains.all;

supervillainsName.forEach(name => {
  console.log(sinsay(chalk.red.bgWhite.bold(name + "\n")));
});

console.log(
  cowsay.say({
    text: "Hello Roby Kind Komodo",
    e: "oO",
    T: "U"
  })
);

console.log(yosay("Hello everyone.. What do you want to do"));

console.log(
  yodasay.say({ text: chalk.blue.bgWhite.bold("Welcome to My World!!") })
);
