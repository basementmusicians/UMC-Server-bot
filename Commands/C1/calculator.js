module.exports ={
name:"calculator",
category: "utility",
description: "An handy button Calculator.",
usage: "+calculator", 
aliases:["cal","calculate"],
code:`$djsEval[
const simplydjs = require("simply-djs");
simplydjs.calculator(client1, message, {
  embedColor: "#075FFF"
  credit: "false"
});
]`
}
