const Intern = require('../lib/Intern');

test('checks for school name of an intern', () => {
    const schoolName = 'College';
    const intern = new Intern('Bob', '1', 'bob@email.com', schoolName);

    expect(intern.getSchool()).toBe(schoolName);
    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('bob@email.com');
});