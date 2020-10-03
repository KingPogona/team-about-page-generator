const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github, role = 'Engineer') {

        super(name, id, email, role);
        this.github = github
    }


    // get user's github name
    getGithub() {
        return this.github
    };
}

module.exports = Engineer;