//Manager Card
const managerCard = function(manager) {
    return `
        <div class="uk-card uk-card-default" id="employee-card">
            <div class="uk-card-title" id="card-header">
                <h2 id="name">${manager.name}</h2>
                <div id="role">
                    <span uk-icon="icon: user"></span>
                    <span id="position-title">Manager</span>
                </div>
            </div>
            <div class="uk-card-body">
                <div class="uk=grid-small">
                    <div class="uk-card uk-card-default" id="id">Id: ${manager.id} </div>
                    <div class="uk-card uk-card-default" id="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></div>
                    <div class="uk-card uk-card-default" id="officeNum">Office Number: ${manager.officeNumber}></div>
                </div>
                
            </div>
        </div>
    `;
}

//Engineer Card
const engineerCard = function (engineer) {
    return `
        <div class="uk-card uk-card-default" id="employee-card">
            <div class="uk-card-title" id="card-header">
                <h2 id="name">${engineer.name}</h2>
                <div id="role">
                    <span uk-icon="icon: user"></span>
                    <span id="position-title">Engineer</span>
                </div>
            </div>
            <div class="uk-card-body">
                <div class="uk=grid-small">
                    <div class="uk-card uk-card-default" id="id">Id: ${engineer.id}</div>
                    <div class="uk-card uk-card-default" id="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div>
                    <div class="uk-card uk-card-default" id="officeNum">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></div>
                </div>
                
            </div>
        </div>
    `;
}

//Intern Card
const internCard = function (intern) {
    return `
        <div class="uk-card uk-card-default" id="employee-card">
            <div class="uk-card-title" id="card-header">
                <h2 id="name">${intern.name}</h2>
                <div id="role">
                    <span uk-icon="icon: user"></span>
                    <span id="position-title">Intern</span>
                </div>
            </div>
            <div class="uk-card-body">
                <div class="uk=grid-small">
                    <div class="uk-card uk-card-default" id="id">Id: ${intern.id}</div>
                    <div class="uk-card uk-card-default" id="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
                    <div class="uk-card uk-card-default" id="officeNum">School: ${intern.school}</div>
                </div>
                
            </div>
        </div>
    `;
}

generateHTML = (teamCards) => {
    cardsArr = []; 

    for (let i = 0; i < teamCards.length; i++) {
        const employee = teamCards[i]; 

        if (teamCards[i].role === 'Manager') {
            const managerCard = managerCard(employee);

            cardsArr.push(managerCard);
        } else if (teamCards[i].role === 'Engineer') {
            const engineerCard = engineerCard(employee);

            cardsArr.push(engineerCard);
        } else if (teamCards[i].role === 'Intern') {
            const internCard = internCard(employee);

            cardsArr.push(internCard);
        }
        
    }

    const generateTeam = generatePage(teamCards); 
    return generateTeam;
}

const generatePage = function(teamCards) {
    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/css/uikit.min.css" />
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header class="uk-container uk-padding-large">
                <h1 class="uk-heading-large uk-text-center uk-align-left@m">My Team</h1>
            </header>
            <main>
                <div class="uk-container uk-flex uk-flex-center" id="team-cards">
                ${teamCards}

                </div>

            </main>
            
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit-icons.min.js"></script>
            <script src="uikit/dist/js/uikit-icons.min.js"></script>
        </body>
        </html>
    `
};

module.exports = generateHTML;