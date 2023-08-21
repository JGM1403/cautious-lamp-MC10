const {Circle, Triangle, Square} = require('./shapes.js');

// Test for SVG text output for circle
describe('Circle', () => {
    test('Should return text of an svg file that is a blue circle with the letters ABC in red', () => {

        const expectedOutput = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">

            <circle cx = "150" cy = "100" r = "80" fill = "blue" />

            <text x = "150" y = "120" font-size = "60" text-anchor = "middle" fill = "red">ABC</text>

            </svg>`;

        const circle = new Circle("ABC", "red", "blue");

        // Expect template literals to match with white spaces removed to avoid formatting issues
        expect(circle.render().replace(/\s/g, '')).toMatch(expectedOutput.replace(/\s/g, ''));
    });
});

// Test for SVG text output for triangle
describe('Triangle', () => {
    test('Should return text of an svg file that is a green triangle with the letters SVG in yellow', () => {

        const expectedOutput = `<svg version = "1.1"
        width = "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg">
        
        <polyline points = "150, 18 244, 182 56, 182" fill = "green" />
        
        <text x = "150" y = "150" font-size = "50" text-anchor = "middle" fill = "yellow">SVG</text>

        </svg>`;

        const circle = new Triangle("SVG", "yellow", "green");

        // Expect template literals to match with white spaces removed to avoid formatting issues
        expect(circle.render().replace(/\s/g, '')).toMatch(expectedOutput.replace(/\s/g, ''));
    });
});

// Test for SVG text output for square
describe('Square', () => {
    test('Should return text of an svg file that is an orange square with the letters XYZ in purple', () => {

        const expectedOutput = `<svg version = "1.1"
        width = "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg">
        
        <rect x = "10" y = "10" width = "200" height = "200" fill = "orange" />
        
        <text x = "110" y = "130" font-size = "80" text-anchor = "middle" fill = "purple">XYZ</text>

        </svg>`;

        const circle = new Square("XYZ", "purple", "orange");

        // Expect template literals to match with white spaces removed to avoid formatting issues
        expect(circle.render().replace(/\s/g, '')).toMatch(expectedOutput.replace(/\s/g, ''));
    });
});