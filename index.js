// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
.prompt (
    [
        {   type: "input",
            message: "Enter project title",
            name: "title"
        },
        {type: "input",
            message: "Input the project description",
            name: "description"
        },
        {
            type: "input",
            message: "Input installation instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "Input usage information",
            name: "usage"
        },
        {
            type: "input",
            message: "Input contribution guidelines",
            name: "contribution"
        },
        {
            type: "input",
            message: "Input tests",
            name: "tests"
        },
        {
            type: "list",
            message: "Select a license",
            choices: ["MIT", "Apache", "GNU", "BSD 2-Clause", "BSD 3-Clause"],
            name: "license"
        },
        {
            type: "input",
            message: "Enter your Github username: ",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your email: ",
            name: "email"
        }
    ]
)

.then( function(input) {
     fs.writeFile("README.md", makeREADME(input), function(error){
        error ? console.log(error) : console.log("added data")
     } )
    
    
})


// TODO: Create a function to write README file
function makeREADME(input) {
    return `
    
# ${input.title}  

![Alt text](https://img.shields.io/badge/license-${input.license}-blue.svg "a title")

## Description

${input.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${input.installation}

## Usage

${input.usage}

## License

${input.license}

## Contributing

${input.contribute}

## Tests
${input.tests}

## Questions

Created by: [${input.username}](github.com/${input.username})

Further questions may be sent to ${input.email}
`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
