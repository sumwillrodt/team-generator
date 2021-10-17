const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/Manager');

test('checks for office number of a manager', () => {
    const officeNum = 1234567890;
    const manager = new Manager('Bob', '1', 'bob@email.com', officeNum);

    expect(manager.getOfficeNumber()).toBe(officeNum);
});