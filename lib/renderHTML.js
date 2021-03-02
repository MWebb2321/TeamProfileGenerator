const path = require("path");
const fs = require("fs");

const templatesDir = path.resolved(_dirname, "../templates");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manger")
        .map(manager => renderManager(manager))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
        );
    html.push(employees
        .filter(employee => employees.getRole() === "Intern")
        .map(intern => renderIntern(intern))
        );

    return renderMain(html.join(""));

};

const renderManager = 