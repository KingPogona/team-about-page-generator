  const generateTeamMembers = projectsArr => {
    return `
            <div class="container-fluid">
                <div class="row justify-content-center pt-4 mx-auto w-75">
        ${projectsArr
          .filter(({ role }) => 'Manager')
          .map(({ getName, id, email, }) => {
            return `
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">${getName()}</h5>
                                <h6 class="card-subtitle"><i class="fas fa-mug-hot"></i> ${getId()}</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 1 </li>
                                <li class="list-group-item">Email: <a href="mailto: ${getMail()}">${getMail()}</a>
                                </li>
                                <li class="list-group-item">Office number: 101</li>
                            </ul>
                        </div>
                    </div>
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ role }) => 'Engineer')
          .map(({ name, description, languages, link }) => {
            return `
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name2</h5>
                                <h6 class="card-subtitle"><i class="fas fa-glasses"></i> Engineer</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 2 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">Github: <a href="https://github.com/KingPogona">KingPogona</a>
                                </li>
                            </ul>
                        </div>
                    </div>
          `;
          })
          .join('')}

          ${projectsArr
            .filter(({ role }) => 'Intern')
            .map(({ name, description, languages, link }) => {
              return `
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name4</h5>
                                <h6 class="card-subtitle"><i class="fas fa-user-graduate"></i> Intern</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 4 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">School: Expensive University</li>
                            </ul>
                        </div>
                    </div>
            `;
            })
            .join('')}
                </div>
            </div>
  `;
};

// Generates a badge for the license used by this project
const generateBadge = license => {
    let badge = '';
    
    if (license === 'none') {
        return '';
    } else if (license === 'GPL-2.0-or-later') {
        badge = '![badmath](https://img.shields.io/badge/License-GPL--2.0--or--later-green)'
    } else if (license === 'GPL-3.0-or-later') {
        badge = '![badmath](https://img.shields.io/badge/License-GPL--3.0--or--later-green)'
    } else {
        badge = '![badmath](https://img.shields.io/badge/License-'+ license +'-green)'
    }

    return `
${badge}
    `;
};
// Generates the Table of Contents based on the included sections
const generateTableOfContents = (templateData) => {

    let tableOfContents = '';

    if (templateData.description !== '') {
        tableOfContents += `
* [Description](#description)`};
    if (templateData.installation !== '') {
        tableOfContents += `
* [Installation](#installation)`};
    if (templateData.usage !== '') {
        tableOfContents += `
* [Usage](#usage)`};
    if (templateData.contributing !== '') {
        tableOfContents += `
* [Contributing](#contributing)`};
    if (templateData.tests !== '') {
        tableOfContents += `
* [Tests](#tests)`};
    if (templateData.license !== '') {
        tableOfContents += `
* [License](#license)`};
    if (templateData.userName !== '') {
        tableOfContents += `
* [Credits](#credits)`};


    return `
## Table of Contents 

${tableOfContents}
    
    `;
};
// Generates installation instructions based on user input.
const generateInstallation = installation => {
    if (!installation) {
        return '';
    }

    return `
## Installation

${installation}
    

    `;
};
// Generates instructions on how to contribute based on user input.
const generateContribute = contributing => {
    if (!contributing) {
        return '';
    }

    return `
## Contributing

${contributing}
    
    `;
};
// Generates test instructions based on user input.
const generateTests = tests => {
    if (!tests) {
        return '';
    }

    return `
## Tests

${tests}

    `;
};
// Generates license info based on user input.
const generateLicense = license => {
    if (!license) {
        return '';
    }

    return `
## License
    
${license}
    
    `;
};
// Generates Credits including all provided collaborators on the project based on user input.
const generateCredits = (userName, userGitHub, collaborators) => {
    if (collaborators === []) {
        return `
## Credits

* ${userName} - [${userGitHub}](${userGitHub})

`
    };

    return `
## Credits

* ${userName} - [${userGitHub}](${userGitHub})
    ${collaborators
        .map(({ name, github }) => {
            return `
* ${name} - [${github}](${github})
        `;
        })
        .join('')}`;
};


// generates the layout of the My Team Page and exports it for use.
module.exports = templateData => {
    // destructure page data by section
    const { userName, userGitHub, userEMail, projectTitle, description, installation, usage, contributing, tests, license, collaborators } = templateData;

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
    
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name</h5>
                                <h6 class="card-subtitle"><i class="fas fa-mug-hot"></i> Manager</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 1 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">Office number: 101</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name2</h5>
                                <h6 class="card-subtitle"><i class="fas fa-glasses"></i> Engineer</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 2 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">Github: <a href="https://github.com/KingPogona">KingPogona</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name3</h5>
                                <h6 class="card-subtitle"><i class="fas fa-glasses"></i> Engineer</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 3 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">Github: <a href="https://github.com/KingPogona">KingPogona</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name4</h5>
                                <h6 class="card-subtitle"><i class="fas fa-user-graduate"></i> Intern</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 4 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">School: Expensive University</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 py-3">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h5 class="card-title">Name5</h5>
                                <h6 class="card-subtitle"><i class="fas fa-user-graduate"></i> Intern</h6>
                            </div>
                            <ul class="list-group list-group-flush px-3">
                                <li class="list-group-item">ID: 5 </li>
                                <li class="list-group-item">Email: <a href="mailto: aacpogona@me.com">aacpogona@me.com</a>
                                </li>
                                <li class="list-group-item">School: Expensive University</li>
                            </ul>
                        </div>
                    </div>
    
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <!-- <script src="./assets/js/scrypt.js"></script> -->
    </body>
    
    </html>
    `;
};