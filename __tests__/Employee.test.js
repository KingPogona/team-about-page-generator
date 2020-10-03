const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js');

for (let i = 0; i < 100; i++) {
    test('creates an employee object', () => {
        const testID = Math.floor((Math.random() * 100) + 1);

        const employee = new Employee('testName', testID, 'test@email.com');

        expect(employee.name).toBe('testName');
        expect(employee.id).toBe(testID);
        expect(employee.email).toBe('test@email.com');
        expect(employee.role).toBe('Employee')
    });
};

test('gets name of employee', () => {
    const employee = new Employee('testName', 0, 'test@email.com');

    expect(employee.getName()).toBe('testName');
});

test('gets id for employee', () => {
    const employee = new Employee('testName', 0, 'test@email.com');

    expect(employee.getID()).toBe(0);
});

test('gets name of employee', () => {
    const employee = new Employee('testName', 0, 'test@email.com');

    expect(employee.getEmail()).toBe('test@email.com');
});

test('gets employee role', () => {
    const employee = new Employee('testName', 0, 'test@email.com');

    expect(employee.getRole()).toBe('Employee');
});