const inquirer = require("inquirer");

const intern = require("lib/manager");
const employee = require("lib/engineer");
const engineer = require("lib/employee");
const manager = require("lib/intern");

const fs = require("fs");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name",
    }, {
        type: "input",
        message: "What is your I.D.?",
        name: "id",
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }, {
        type: "input",
        message: "What is your office role?",
        name: "role",
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number",
        name: "office number"
    }];
    return inquirer
    .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your gitHub?",
        name: "github",
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school did you attend?",
        name: "school",
    }];
    return inquirer
        .prompt(promptArray);
}

inquirer.prompt(managerQuestions)
    .then((response) => {
        const manager = new manager(response.name, response.id, response.email, response.officenumber);
        promptArray.push(manager);
        determineEmployee();
    });

function determineEmployee() {
    const employeeQuestions = [{
        name: 'choice',
        type: 'list',
        message: 'What would you like to add:',
        choices: ['Intern', 'Engineer', 'Done'],
    }, ];
    inquirer.prompt(employeeQuestions)
        .then((answers) => {
            if (answers.choice === 'Intern') {
                internInfo();
            }
            if (answers.choice === 'Engineer') {
                engineerInfo();
            }
            if (answers.choice === 'Done') {
                createHTMLFile();
            }
        })
}

function internInfo() {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            teamArray.push(intern);
            determineEmployee();
        })
}

function engineerInfo() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            teamArray.push(engineer);
            determineEmployee();
        })
}

function createHTMLFile() {
    try {
        const html = render(teamArray);
        fs.writeFileSync(outputPath, html);
    } catch (error) {
        console.log(error);
    }
}

//init();