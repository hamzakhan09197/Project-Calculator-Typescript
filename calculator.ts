#!/usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./functions.js";
import { sub } from "./functions.js";
import { multi } from "./functions.js";
import { dev } from "./functions.js";
import showBanner from "node-banner";
import chalk from "chalk";
import { createSpinner } from 'nanospinner';


let sleep = () => new Promise((r) => setTimeout(r,2000))

let answers = ([{
    type: "number",
    name: "num1",
    message: chalk.rgb(52, 73, 94)("Enter first Nmuber"),
    validate: (input: number) => {
        if (isNaN(input)) {
            return chalk.rgb(183, 149, 11)("Please Enter numbers");
        }
        return true;
    }
}, {
    type: "list",
    name: "opreator",
    choices: ["addition", "subtraction", "multiplication", "division"],
    message: chalk.rgb(52, 73, 94)("Enter the Opreator")

}, {
    type: "number",
    name: "num2",
    message: chalk.rgb(52, 73, 94)("Enter second Nmuber"),
    validate: (input: number) => {
        if (isNaN(input)) {
            return chalk.rgb(183, 149, 11)("Please Enter numbers");
        }
        return true;
    }

    
}]);
let answer = [{
    name: "again",
    type: "confirm",
    message: chalk.rgb(21, 67, 96)("Do you want to calculate again")

}];


(async () => {
    await showBanner('Calculator', 'This is calculator can perfome , Addition , Subtraction ,  Multiplication and Division');
})();

async function calculator() {
    let condition = true;
    while (condition) {


        let { num2, num1, opreator } = await inquirer.prompt(answers)
        let spinner = createSpinner("Calculating").start();
        await sleep();
        if (opreator === "addition") {
            spinner.success({text : `Addition of two numbers are : ${sum(num1, num2)}`});

        } else if (opreator === "subtraction") {
            spinner.success({text : `Subtraction of two numbers are : ${sub(num1, num2)}`});

        } else if (opreator === "multiplication") {
            spinner.success({text : `Multiplication of two numbers are : ${multi(num1, num2)}`});
            

        } else if (opreator === "division") {
            spinner.success({text : `Division of two numbers are : ${dev(num1, num2)}`});

        }
        await sleep();
        let { again } = await inquirer.prompt(answer)
        condition = again;
        console.log(`\n ---{===================================================================}--- \n`);

    }
    
}
setTimeout(() => {
    calculator()
}, 1000);


