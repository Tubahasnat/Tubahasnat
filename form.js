#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let banner = showBanner('Title form', 'This is registration form');
    await sleep();
    console.log();
}
await welcome();
async function askQuestion() {
    const student1 = await inquirer
        .prompt([
        {
            type: 'string',
            name: 'name',
            message: 'Enter your name: '
        },
        {
            type: 'string',
            name: 'fatherName',
            message: 'Enter your father name: '
        },
        {
            type: 'string || number',
            name: 'email',
            message: 'Enter your email: '
        },
        {
            type: 'number',
            name: 'contactNumber',
            message: 'Enter your contact number: '
        },
        {
            type: 'number',
            name: 'registrationNumber',
            message: 'Enter your registration number: '
        },
    ]);
    // console.log(student1)
    console.log(chalk.yellow(student1.name));
    console.log(chalk.yellow(student1.fatherName));
    console.log(chalk.yellow(student1.email));
    console.log(chalk.yellow(student1.contactNumber));
    console.log(chalk.yellow(student1.registrationNumber));
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue?Press y or n "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
