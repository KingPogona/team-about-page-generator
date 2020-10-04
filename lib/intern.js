const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school, role = 'Intern') {

        super(name, id, email, role);
        this.school = school
    }


    // get user's school name
    getSchool() {
        return this.school
    };
}

module.exports = Intern;