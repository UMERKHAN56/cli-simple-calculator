#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Welcome Message
console.log("/n/twelcome to /'umerkhan/' -  CLI Simple Calculator\n");
let answers = await inquirer.prompt([
    {
        message: "enter your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "choose one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement of If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid input");
}
