class Circle1 {
  constructor(radius1) {
    this.radius1 = radius1;
  }
  
static calculateArea(Radius, Result) {
  const radius1 = parseFloat(document.getElementById(Radius).value);

  if (isNaN(radius1)) {
    document.getElementById(Result).innerHTML = 'Please enter a valid radius.';
  } else {
    const circle = new Circle1(radius1);
    const area = circle.getArea().toFixed(2);

    document.getElementById(Result).innerHTML = `The area is ${area}`;
  }
}

  getArea() {
    return Math.PI * Math.pow(this.radius1, 2);
  }
}

