const Engineer = require('../lib/Engineer');

test('checks for the creation of an engineer', () => {
    const githubLink = 'gitlink.com/username';
    const engineer = new Engineer('Bob', '1', 'bob@email.com', githubLink);

    expect(engineer.getGithub()).toBe(githubLink);
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('bob@email.com');
});