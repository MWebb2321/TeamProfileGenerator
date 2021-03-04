const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');
const employeeHTML = require('./src/employeeHTML');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array to hold employees user generates
let employeeList = [];

// Function that prompts user to enter employee info
const promptUser = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },

        {
            type: "number",
            name: "id",
            message: "Their employee ID number?"
        },

        {
            type: "input",
            name: "email",
            message: "How about their email address?"
        },

        {
            type: "list",
            name: "role",
            message: "Lastly, what is their role?",
            choices: ["Manager", "Engineer", "Intern"]
        },

        {
            when: input => {
                return input.role == "Manager"
            },
            type: "input",
            name: "officeNumber",
            message: "What is their office number?",
        },

        {
            when: input => {
                return input.role == "Engineer"
            },
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",
        },

        {
            when: input => {
                return input.role == "Intern"
            },
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },

        {
            type: "list",
            name: "continue",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ])

    .then((answers) => {
        // Adds employee to array
        employeeList.push(answers);

        // Logs this employee in the console
        console.log(employeeList);

        // If user needs to enter more employees...
        if (answers.continue === "Yes"){
            // Runs prompting function again
            promptUser();
        }

        // If not...
        else {
            // Blank string to hold generated HTML
            let employeeCards = "";

            // For loop that runs functions for HTML generation for each employee in the roster
            for (var i = 0; i < employeeList.length; i++) {
                const employeeInfo = employeeHTML(employeeList[i]);
                
                // Adds current employee's HTML to the employeeCards string
                employeeCards += employeeInfo;
            };

            // Wrting the HTML file (dummy callback to avoid errors)
            fs.writeFile(`${__dirname}/dist/index.html`, generateHTML(employeeCards), (err) => {
                if (err) {
                    throw err;
                }
            });
        };
    })

    // Catching errors...
    .catch((err) => console.error(err));
};

// Prompting function is triggered upon running the application
promptUser();