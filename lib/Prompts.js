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

    // prompt user for employee name
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
            // destructure employee name from the prompt object
            .then(({ name }) => {
                this.name = name;
                this.promptId();
            });
    };

    // prompt user for employee id number
    promptId() {
        inquirer
            .prompt({
                type: 'number',
                name: 'id',
                message: "What is this employee's id number?",
                // make this validate a number answer

                validate: verifyInput => {
                    if (typeof verifyInput === 'number') {
                        return true;
                    } else {
                        console.log("Please enter an employee id number.");
                        return false;
                    }
                }
            })
            // destructure id from the prompt object
            .then(({ id }) => {
                this.id = id;
                this.promptEmail();
            });
    };

    // prompt user for employee email
    promptEmail() {
        inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "What is this employee's email address?",

                validate: verifyInput => {
                    if (verifyInput) {
                        return true;
                    } else {
                        console.log("Please enter an email address for this employee.");
                        return false;
                    }
                }
            })
            // destructure email from the prompt object
            .then(({ email }) => {
                this.email = email;
                this.promptRole();
            });
    };

    // prompt user for employee role
    promptRole() {
        inquirer
            .prompt({
                type: 'list',
                name: 'role',
                message: "What is this employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            })
            // destructure role from the prompt object
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

    // prompt user for employee's office number
    promptOfficeNumber() {
        inquirer
            .prompt({
                type: 'number',
                name: 'officeNumber',
                message: "What is this Manager's office number?",
                // make this validate a number

                validate: verifyInput => {
                    if (typeof verifyInput === 'number') {
                        return true;
                    } else {
                        console.log("Please enter an office number for this manager.");
                        return false;
                    }
                }
            })
            // destructure office number from the prompt object
            .then(({ officeNumber }) => {
                this.employeesArr.push(new Manager(this.name, this.id, this.email, officeNumber));
                this.promptAnotherEmployee();
            });
    };

    // prompt user for employee's github username
    promptGithub() {
        inquirer
            .prompt({
                type: 'text',
                name: 'github',
                message: "What is this Engineer's github username?",
                // make this validate an answer

                validate: verifyInput => {
                    if (verifyInput) {
                        return true;
                    } else {
                        console.log("Please enter a github username for this Engineer.");
                        return false;
                    }
                }
            })
            // destructure github name from the prompt object
            .then(({ github }) => {
                this.employeesArr.push(new Engineer(this.name, this.id, this.email, github));
                this.promptAnotherEmployee();
            });
    };

    // prompt user for where intern goes to school
    promptSchool() {
        inquirer
            .prompt({
                type: 'text',
                name: 'school',
                message: "Where does this Intern go to school?",
                // make this validate an answer

                validate: verifyInput => {
                    if (verifyInput) {
                        return true;
                    } else {
                        console.log("Please enter a name for where this intern goes to school.");
                        return false;
                    }
                }
            })
            // destructure school name from the prompt object
            .then(({ school }) => {
                this.employeesArr.push(new Intern(this.name, this.id, this.email, school));
                this.promptAnotherEmployee();
            });
    };


    // prompt user if they want to add another employee
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
                    // generate new webpage using the collected data according to the template
                    this.createHTML();
                }
            });
    };

    createHTML() {
            // generate the html and write it to dist as index.html
            writeFile(generatePage(this.employeesArr))
            // then log the result
            .then(writeFileResponse => {
                console.log(writeFileResponse);
            })
            .catch(err => {
                console.log(err);
            });
    }
};

module.exports = Prompts;



