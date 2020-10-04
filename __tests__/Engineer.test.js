const Engineer = require('../lib/Engineer.js');

// jest.mock('../lib/Engineer.js');

for (let i = 0; i < 100; i++) {
    test('creates a Engineer object', () => {
        const testEmployeeID = Math.floor((Math.random() * 100) + 1);
        const testOfficeNumber = Math.floor((Math.random() * 100) + 102);

        const engineer = new Engineer('testName', testEmployeeID, 'test@email.com', 'myGitHub');

        // console.log(engineer);

        expect(engineer.name).toBe('testName');
        expect(engineer.id).toBe(testEmployeeID);
        expect(engineer.email).toBe('test@email.com');
        expect(engineer.role).toBe('Engineer')
        expect(engineer.github).toBe('myGitHub');

    });
};

test('gets name of Engineer', () => {
    const engineer = new Engineer('testName', 0, 'test@email.com', 'myGitHub');

    expect(engineer.getName()).toBe('testName');
});

test('gets id of Engineer', () => {
    const engineer = new Engineer('testName', 0, 'test@email.com', 'myGitHub');

    expect(engineer.getId()).toBe(0);
});

test('gets email of Engineer', () => {
    const engineer = new Engineer('testName', 0, 'test@email.com', 'myGitHub');

    expect(engineer.getEmail()).toBe('test@email.com');
});

test('gets role of Engineer', () => {
    const engineer = new Engineer('testName', 0, 'test@email.com', 'myGitHub');

    expect(engineer.getRole()).toBe('Engineer');
});

test('gets github name for Engineer', () => {
    const engineer = new Engineer('testName', 0, 'test@email.com', 'myGitHub');

    expect(engineer.getGithub()).toBe('myGitHub');
});