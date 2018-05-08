class Shape {
    get area() {}
}

class Rectangle extends Shape {
    _height;
    _width;

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._heght = value;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    sideLength;

    get area() {
        return this.sideLength * this.sideLength;
    }

    area(value) {
        this.area = value;
    }
}

function calculateArea(rect) {
    return rect.getArea();
}

console.log(calculateArea(square));