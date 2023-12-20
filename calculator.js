import inquirer from "inquirer";
let ansewer = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Enter first Nmuber"
    },
    {
        type: "inupt",
        name: "opreator",
        message: "Enter the Opreator"
    },
    {
        type: "number",
        name: "num2",
        message: "Enter second Nmuber"
    }]);
if (ansewer.opreator == "+") {
    let add = ansewer.num1 + ansewer.num2;
    console.log(`Here is the Answer: ${add}`);
}
else if (ansewer.opreator == "-") {
    let sub = ansewer.num1 - ansewer.num2;
    console.log(`Here is the Answer: ${sub}`);
}
else if (ansewer.opreator == "*") {
    let multi = ansewer.num1 * ansewer.num2;
    console.log(`Here is the Answer: ${multi}`);
}
else if (ansewer.opreator == "/") {
    let dvi = ansewer.num1 / ansewer.num2;
    console.log(`Here is the Answer: ${dvi}`);
}
else {
    console.log('Invalid Opreator');
}
