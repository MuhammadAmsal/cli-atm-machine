#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 70000;
let pin = 1234;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "Please Enter your pin",
        type: "number" },
]);
// pin checking 
if (pinAnswer.pin === pin) {
    console.log("Pin is Correct!");
    // pin is correct provide two options
    let optionsAns = await inquirer.prompt([
        {
            name: "options",
            message: "Please Select One Option",
            type: "list",
            choices: ["Moneywithdraw", "Check Balance"],
        },
    ]);
    // user select withdraw option
    if (optionsAns.options === "Moneywithdraw") {
        let withDraw = await inquirer.prompt([
            {
                name: "money",
                message: "Please Enter Amount you want to withdraw",
                type: "number",
            },
        ]);
        // checking withdraw money is less than total balance
        if (withDraw.money > totalBalance) {
            console.log(`Sorry your total balance is ${totalBalance}`);
        }
        else {
            let remainingBalance = totalBalance - withDraw.money;
            console.log(`Your remaining Balance is ${remainingBalance}`);
        }
    }
    else if (optionsAns.options === "Check Balance") {
        console.log(`Total balance in your Account is ${totalBalance}`);
    }
}
else {
    console.log("Pin Code is incorrect!");
}
