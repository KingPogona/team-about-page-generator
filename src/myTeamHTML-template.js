// get the array of all employees and filter which employee type it is.
// build the appropriate card for each employee based on employee type.
const generateTeamMembers = employeesArr => {
    return `
        ${employeesArr
            .filter((employee) => employee.getRole() === 'Manager')
            .map((employee) => {
                let name = employee.getName()
                let role = employee.getRole()
                let id = employee.getId()
                let mail = employee.getEmail()
                let officeNumber = employee.getOfficeNumber();
                return `
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-subtitle"><i class="fas fa-mug-hot"></i> ${role}</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">
                                    ID: ${id}
                                </li>
                                <li class="list-group-item">Email:
                                    <a href="mailto: ${mail}">${mail}</a>
                                </li>
                                <li class="list-group-item">
                                    Office number: ${officeNumber}
                                </li>
                            </ul>
                        </div>
                    </div>
                `;
            })
        .join('')}

        ${employeesArr
            .filter((employee) => employee.getRole() === 'Engineer')
            .map((employee) => {
                let name = employee.getName()
                let role = employee.getRole()
                let id = employee.getId()
                let mail = employee.getEmail()
                let github = employee.getGithub()
                return `
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-subtitle"><i class="fas fa-mug-hot"></i> ${role}</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">
                                    ID: ${id}
                                </li>
                                <li class="list-group-item">Email:
                                    <a href="mailto: ${mail}">${mail}</a>
                                </li>
                                <li class="list-group-item">
                                    Github: <a href="https://github.com/${github}">${github}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                `;
            })
        .join('')}

        ${employeesArr
            .filter((employee) => employee.getRole() === 'Intern')
            .map((employee) => {
                let name = employee.getName()
                let role = employee.getRole()
                let id = employee.getId()
                let mail = employee.getEmail()
                let school = employee.getSchool()
                return `
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-subtitle"><i class="fas fa-mug-hot"></i> ${role}</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">
                                    ID: ${id}
                                </li>
                                <li class="list-group-item">Email:
                                    <a href="mailto: ${mail}">${mail}</a>
                                </li>
                                <li class="list-group-item">
                                    School: ${school}
                                </li>
                            </ul>
                        </div>
                    </div>
                    `;
            })
        .join('')}
  `;
};



// generates the layout of the My Team Page and exports it for use.
module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <!-- <link rel="stylesheet" href="./assets/css/style.css" /> -->
    
        <style>
            body {font-family: Arial, Helvetica, sans-serif;}
        </style>
        
        <title>My Team</title>
    </head>
    
    <body>
    
        <header class="navbar navbar-dark bg-dark py-3">
            <h1 class="text-white mx-auto">My Team</h1>
        </header>
    
    
    
        <main>
            <div class="container-fluid">
                <div class="row justify-content-center pt-4 mx-auto w-75">

                    ${generateTeamMembers(templateData)}
    
                </div>
            </div>
        </main>
    

    
        <script src="https://code.jquery.com/jquery-3.5.1.js"
            integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `;
};

