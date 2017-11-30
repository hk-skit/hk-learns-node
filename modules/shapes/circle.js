class Circle {
    constructor(radius, point = {
        x: 0,
        y: 0
    }) {
        this.radius = radius;
    }

    get area() {
        const rSquare = Math.pow(this.radius, 2);
        return Math.PI * rSquare;
    }
}

module.exports = Circle;
