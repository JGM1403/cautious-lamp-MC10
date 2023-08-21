// Parent class Shape
class Shape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Child class Circle
class Circle extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render() {
        const output = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">
            
            <circle cx = "150" cy = "100" r = "80" fill = "${this.shapeColor}" />
            
            <text x = "150" y = "120" font-size = "60" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>
    
            </svg>`
    
        return output;
    }
}

// Child class Triangle
class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render() {
        const output = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">
            
            <polyline points = "150, 18 244, 182 56, 182" fill = "${this.shapeColor}" />
            
            <text x = "150" y = "150" font-size = "50" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>

            </svg>`

        return output;
    }
}

// Child class Square
class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render() {
        const output = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">
            
            <rect x = "10" y = "10" width = "200" height = "200" fill = "${this.shapeColor}" />
            
            <text x = "110" y = "130" font-size = "80" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>

            </svg>`

        return output;
    }
}

// Render a circle using the Circle class render function
function createCircle(charactersInput, textColorInput, shapeColorInput)
{
    const circleOutput = new Circle(charactersInput, textColorInput, shapeColorInput);

    const renderCircle = circleOutput.render();

    return renderCircle;
}

// Render a triangle using the Triangle class render function
function createTriangle(charactersInput, textColorInput, shapeColorInput)
{
    const triangleOutput = new Triangle(charactersInput, textColorInput, shapeColorInput);

    const renderTriangle = triangleOutput.render();

    return renderTriangle;
}

// Render a square using the Square class render function
function createSquare(charactersInput, textColorInput, shapeColorInput)
{
    const squareOutput = new Square(charactersInput, textColorInput, shapeColorInput);

    const renderSquare = squareOutput.render();

    return renderSquare;
}

module.exports = {createCircle, createTriangle, createSquare, Shape, Circle, Triangle, Square};