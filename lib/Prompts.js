const inquirer = require('inquirer');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const generatePage = require('/Users/asherclawson/Documents/GitHub/team-about-page-generator/src/myTeamHTML-template.js');
const { writeFile } = require('./writeFile.js');



class Prompts {
    constructor() {
        this.name,
            this.id,
            this.email,

            this.employeesArr = [];
    }

    // do initializations (if needed)
    initializeProject() {
        this.promptName();
    }

    // prompt user for inputs
    promptName() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: "What is this employee's name?",
                // make this validate a string answer
                validate: verifyInput => {
                    if (verifyInput) {
                        return true;
                    } else {
                        console.log("Please enter a name for this Employee.");
                        return false;
                    }
                }
            })
            // destructure name from the prompt object
            .then(({ name }) => {
                this.name = name;
                this.promptId();
            });
    };

    // prompt user for inputs
    promptId() {
        inquirer
            .prompt({
                type: 'number',
                name: 'id',
                message: "What is this employee's id number?",
                // make this validate a number answer

                // validate: verifyInput => {
                //     if (verifyInput) {
                //         return true;
                //     } else {
                //         console.log("Please enter a name for this Employee.");
                //         return false;
                //     }
                // }
            })
            // destructure name from the prompt object
            .then(({ id }) => {
                this.id = id;
                this.promptEmail();
            });
    };

    // prompt user for inputs
    promptEmail() {
        inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "What is this employee's email address?",
                // make this validate an email address for an answer (or at least text)

                // validate: verifyInput => {
                //     if (verifyInput) {
                //         return true;
                //     } else {
                //         console.log("Please enter a name for this Employee.");
                //         return false;
                //     }
                // }
            })
            // destructure name from the prompt object
            .then(({ email }) => {
                this.email = email;
                this.promptRole();
            });
    };

    // prompt user for inputs
    promptRole() {
        inquirer
            .prompt({
                type: 'list',
                name: 'role',
                message: "What is this employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            })
            // destructure name from the prompt object
            .then(({ role }) => {
                if (role === 'Manager') {
                    this.promptOfficeNumber();
                } else if (role === 'Engineer') {
                    this.promptGithub();
                } else {
                    this.promptSchool();
                }
            });
    };

    // prompt user for inputs
    promptOfficeNumber() {
        inquirer
            .prompt({
                type: 'number',
                name: 'officeNumber',
                message: "What is this Manager's office number?",
                // make this validate a number

                // validate: verifyInput => {
                //     if (verifyInput) {
                //         return true;
                //     } else {
                //         console.log("Please enter a name for this Employee.");
                //         return false;
                //     }
                // }
            })
            // destructure name from the prompt object
            .then(({ officeNumber }) => {
                this.employeesArr.push(new Manager(this.name, this.id, this.email, officeNumber));
                this.promptAnotherEmployee();
            });
    };

    // prompt user for inputs
    promptGithub() {
        inquirer
            .prompt({
                type: 'text',
                name: 'github',
                message: "What is this Engineer's github username?",
                // make this validate an answer

                // validate: verifyInput => {
                //     if (verifyInput) {
                //         return true;
                //     } else {
                //         console.log("Please enter a name for this Employee.");
                //         return false;
                //     }
                // }
            })
            // destructure name from the prompt object (if possible get url generated from username)
            .then(({ github }) => {
                this.employeesArr.push(new Engineer(this.name, this.id, this.email, github));
                this.promptAnotherEmployee();
            });
    };

    // prompt user for inputs
    promptSchool() {
        inquirer
            .prompt({
                type: 'text',
                name: 'school',
                message: "Where does this Intern go to school?",
                // make this validate an answer

                // validate: verifyInput => {
                //     if (verifyInput) {
                //         return true;
                //     } else {
                //         console.log("Please enter a name for this Employee.");
                //         return false;
                //     }
                // }
            })
            // destructure name from the prompt object (if possible get url generated from username)
            .then(({ school }) => {
                this.employeesArr.push(new Intern(this.name, this.id, this.email, school));
                this.promptAnotherEmployee();
            });
    };


    // prompt user for inputs
    promptAnotherEmployee() {
        inquirer
            .prompt({
                type: 'confirm',
                name: 'confirmEmployee',
                message: "Would you like to add another team member?",
            })
            // destructure name from the prompt object
            .then(({ confirmEmployee }) => {
                if (confirmEmployee) {
                    this.promptName();
                } else {
                    // generate new webpage using this data and the template
                    // console.log(this.employees);
                    // return this.employees;
                    this.createHTML();
                }
            });
    };

    createHTML() {
            writeFile(generatePage(this.employeesArr))
            .then(writeFileResponse => {
                console.log(writeFileResponse);
            })
            .catch(err => {
                console.log(err);
            });
    }
};

module.exports = Prompts;



