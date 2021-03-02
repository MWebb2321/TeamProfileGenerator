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

