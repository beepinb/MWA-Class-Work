// require("./instantHello");
const question=require("../talk/question")
const goodbye=require("../talk");

// goodbye();

// question.ask("What is method overloading? ");

//blocking way

// console.log("1");
// require("./fibonacci")
// console.log("3");

//non-blocking way
// const child_process=require("child_process");
// console.log("1");
// const newProcess=child_process.spawn("node",["fibonacci.js"],{stdio:"inherit"});
// console.log("3");

const child_process=require("child_process");
console.log("Start");
const newProcess=child_process.spawn("node",["fibonacci.js"],{stdio:"inherit"});
console.log("end");