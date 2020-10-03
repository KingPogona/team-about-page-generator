const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
        this.role = 'Employee'
    }



    // get name of user using inquirer
    getName() {
        return this.name
    };

     // get id of user using inquirer
     getID() {
        return this.id
    };

    // get email of user using inquirer
    getEmail() {
        return this.email
    };

    // get email of user using inquirer
    getRole() {
        return this.role
    };

}

module.exports = Employee;