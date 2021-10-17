const Employee = require('../lib/Employee');

test('can create an employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})