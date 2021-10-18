const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const generateHTML = require("./src/pageTemplate");

const teamArr = [];
    
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the team manager!");
                    return false;
                }
            }
        }, 
        {
            type: "input",
            message: "What is the team manager's employee ID?",
            name: "id",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officeNumber",
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's phone number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInfo => {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);

        teamArr.push(manager); 
    });
};

const addEmployee = () => {

    return inquirer.prompt([
        {
            type: "confirm",
            name: "addMemberConfirm",
            message: "Would you like to add a team member?",
            default: true
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the employee!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the employee's employee ID?",
            name: "id",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!");
                }
            }
        }
    ])
    .then(EmployeeInfo => {

        if (EmployeeInfo.role === "Engineer") {
            const engineer = new Engineer(EmployeeInfo.name, EmployeeInfo.id, EmployeeInfo.email, EmployeeInfo.github);
            teamArr.push(engineer);
        } else if (EmployeeInfo.role === "Intern") {
            const intern = new Intern(EmployeeInfo.name, EmployeeInfo.id, EmployeeInfo.email, EmployeeInfo.school);
            teamArr.push(intern);
        }

        return teamArr;
    });
};

const { resolve } = require('path');

const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            reject(err);
            return;
        } 
        
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};


addManager()
    .then(addEmployee)
    .then(teamArr => {
        return generateHTML(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });