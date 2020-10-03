const Intern = require('../lib/Intern.js');

// jest.mock('../lib/Intern.js');

for (let i = 0; i < 100; i++) {
    test('creates a Intern object', () => {
        const testEmployeeID = Math.floor((Math.random() * 100) + 1);
        const testOfficeNumber = Math.floor((Math.random() * 100) + 102);

        const intern = new Intern('testName', testEmployeeID, 'test@email.com', 'testSchool');

        console.log(intern);

        expect(intern.name).toBe('testName');
        expect(intern.id).toBe(testEmployeeID);
        expect(intern.email).toBe('test@email.com');
        expect(intern.role).toBe('Intern')
        expect(intern.school).toBe('testSchool');

    });
};

test('gets name of Intern', () => {
    const intern = new Intern('testName', 0, 'test@email.com', 'testSchool');

    expect(intern.getName()).toBe('testName');
});

test('gets id of Intern', () => {
    const intern = new Intern('testName', 0, 'test@email.com', 'testSchool');

    expect(intern.getID()).toBe(0);
});

test('gets email of Intern', () => {
    const intern = new Intern('testName', 0, 'test@email.com', 'testSchool');

    expect(intern.getEmail()).toBe('test@email.com');
});

test('gets role of Intern', () => {
    const intern = new Intern('testName', 0, 'test@email.com', 'testSchool');

    expect(intern.getRole()).toBe('Intern');
});

test('gets school name for Intern', () => {
    const intern = new Intern('testName', 0, 'test@email.com', 'testSchool');

    expect(intern.getSchool()).toBe('testSchool');
});