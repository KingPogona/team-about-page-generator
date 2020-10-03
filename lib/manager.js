const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role = 'Manager') {

        super(name, id, email, role);
        this.officeNumber = officeNumber
    }


    // get user's office number
    getOfficeNumber() {
        return this.officeNumber
    };
}

module.exports = Manager;