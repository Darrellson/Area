class Square {
    constructor(sideLength1) {
      this.sideLength1 = sideLength1;
    }

    static calculatePerimeter(SideLength, Result) {
    const sideLength1 = parseFloat(document.getElementById(SideLength).value);
  
    if (isNaN(sideLength1)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid side length.';
    } else {
      const square = new Square(sideLength1);
      const perimeter = square.getPerimeter();
  
      document.getElementById(Result).innerHTML = `The perimeter of the square is ${perimeter}`;
    }
  }
  
  static calculateArea1(SideLength, Result) {
    const sideLength1 = parseFloat(document.getElementById(SideLength).value);
  
    if (isNaN(sideLength1)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid side length.';
    } else {
      const square = new Square(sideLength1);
      const area = square.getArea();
  
      document.getElementById(Result).innerHTML = `The area of the square is ${area}`;
    }
  }
  
  
    getPerimeter() {
      return 4 * this.sideLength1;
    }
  
    getArea() {
      return Math.pow(this.sideLength1, 2);
    }
  }
  
  