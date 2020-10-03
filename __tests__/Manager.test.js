const Manager = require('../lib/Manager.js');

// jest.mock('../lib/Manager.js');

for (let i = 0; i < 100; i++) {
    test('creates a Manager object', () => {
        const testEmployeeID = Math.floor((Math.random() * 100) + 1);
        const testOfficeNumber = Math.floor((Math.random() * 100) + 102);

        const manager = new Manager('testName', testEmployeeID, 'test@email.com', testOfficeNumber);

        // console.log(manager);

        expect(manager.name).toBe('testName');
        expect(manager.id).toBe(testEmployeeID);
        expect(manager.email).toBe('test@email.com');
        expect(manager.role).toBe('Manager')
        expect(manager.officeNumber).toBe(testOfficeNumber);

    });
};

test('gets name of Manager', () => {
    const manager = new Manager('testName', 0, 'test@email.com', 101);

    expect(manager.getName()).toBe('testName');
});

test('gets id of Manager', () => {
    const manager = new Manager('testName', 0, 'test@email.com', 101);

    expect(manager.getID()).toBe(0);
});

test('gets email of Manager', () => {
    const manager = new Manager('testName', 0, 'test@email.com', 101);

    expect(manager.getEmail()).toBe('test@email.com');
});

test('gets role of Manager', () => {
    const manager = new Manager('testName', 0, 'test@email.com', 101);

    expect(manager.getRole()).toBe('Manager');
});

test('gets office number of Manager', () => {
    const manager = new Manager('testName', 0, 'test@email.com', 101);

    expect(manager.getOfficeNumber()).toBe(101);
});