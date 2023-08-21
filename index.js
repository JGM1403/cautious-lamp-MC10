// Import libraries for inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Import functions from shapes.js
const shapes = require('./lib/shapes.js');

// Use inquirer to get user input for SVG creation
function getUserInput()
{
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter up to three characters that you would like to see in the logo',
                name: 'characters',
                validate: (characters) => {
                    if (characters.length < 1 || characters.length > 3)
                    {
                        return 'Please enter up to three characters that you would like to see in the logo'
                    }

                    else
                    {
                        return true;
                    }
                }
            },

            {
                type: 'input',
                message: 'Please enter the desired color of the text: color name or hexidecimal',
                name: 'textColor',
            },

            {
                type: 'list',
                message: 'Please choose the desired shape for the logo',
                choices: ['Circle', 'Triangle', 'Square'],
                name: 'shape',
            },

            {
                type: 'input',
                message: 'Please enter the desired color of the shape: color name or hexidecimal',
                name: 'shapeColor',
            },
        ])
        // Create SVG file using functions in shapes.js depending on selected shape
        .then((response) => {
            console.log(response);

            if (response.shape === "Circle")
            {
                const output = shapes.createCircle(response.characters, response.textColor, response.shapeColor);

                console.log(output);

                fs.writeFile('./examples/logo.svg', output, (err) => 
                    err ? console.error(err) : console.log("Generated logo.svg")
                );
            }

            if (response.shape === "Triangle")
            {
                const output = shapes.createTriangle(response.characters, response.textColor, response.shapeColor);

                console.log(output);

                fs.writeFile('./examples/logo.svg', output, (err) => 
                    err ? console.error(err) : console.log("Generated logo.svg")
                );
            }

            if (response.shape === "Square")
            {
                const output = shapes.createSquare(response.characters, response.textColor, response.shapeColor);

                console.log(output);

                fs.writeFile('./examples/logo.svg', output, (err) => 
                    err ? console.error(err) : console.log("Generated logo.svg")
                );
            }
        });
}

getUserInput();

module.exports = {getUserInput};