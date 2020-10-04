class Employee {
    constructor(name, id, email, role = 'Employee') {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = role
    }



    // get name of user
    getName() {
        return this.name
    };

     // get id of user
     getId() {
        return this.id
    };

    // get email of user
    getEmail() {
        return this.email
    };

    // get email of user
    getRole() {
        return this.role
    };

}

module.exports = Employee;