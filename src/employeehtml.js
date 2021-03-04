const HTMLtemplate = (employee) => {

    if (employee.role === "Manager") {
        return `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> ${employee.name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"> ${employee.role} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${employee.id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${employee.email}"> ${employee.email} </a> </li>
                    <li class="list-group-item"> Office number: ${employee.officeNumber} </li>
                </ul>
            </div>
        </div>`
    }

    else if (employee.role === "Engineer") {
        return `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> ${employee.name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"> ${employee.role} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${employee.id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${employee.email}"> ${employee.email} </a> </li>
                    <li class="list-group-item"> Github: <a href="https://github.com/${employee.github}" target="_blank"> ${employee.github} </a> </li>
                </ul>
            </div>
        </div>`
    }

    else if (employee.role === "Intern") {
        return `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> ${employee.name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"> ${employee.role} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${employee.id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${employee.email}"> ${employee.email} </a> </li>
                    <li class="list-group-item"> School: ${employee.school} </li>
                </ul>
            </div>
        </div>`
    }
};

module.exports = HTMLtemplate;