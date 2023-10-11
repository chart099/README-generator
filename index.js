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
            type: "dropdown",
            message: "Select a license",
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

![Static Badge](https://img.shields.io/badge/${input.license})



## Description

${input.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
-[How to Contribute](#howtocontriubte)
-[Tests](#tests)

## Installation

${input.installation}

## Usage

${input.usage}

## License

${input.license}

## Badges


## How to Contribute

${input.contribute}

## Tests
${input.tests}
`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
