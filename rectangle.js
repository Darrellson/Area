class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }

  static calculatePerimeter1(Length, Width, Result) {
    const length = parseFloat(document.getElementById(Length).value);
    const width = parseFloat(document.getElementById(Width).value);
  
    if (isNaN(length) || isNaN(width)) {
      document.getElementById(Result).innerHTML = 'Please enter valid length and width.';
    } else {
      const rectangle = new Rectangle(length, width);
      const perimeter = rectangle.getPerimeter();
  
      document.getElementById(Result).innerHTML = `The perimeter of the rectangle is ${perimeter}`;
    }
  }
  
  static calculateArea2(Length, Width, Result1) {
    const length = parseFloat(document.getElementById(Length).value);
    const width = parseFloat(document.getElementById(Width).value);
  
    if (isNaN(length) || isNaN(width)) {
      document.getElementById(Result1).innerHTML = 'Please enter valid length and width.';
    } else {
      const rectangle = new Rectangle(length, width);
      const area = rectangle.getArea();
  
      document.getElementById(Result1).innerHTML = `The area of the rectangle is ${area}`;
    }
  }
  
  
    getPerimeter() {
      return 2 * (this.length + this.width);
    }
  
    getArea() {
      return this.length * this.width;
    }
  }
  
