class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  static calculateCircumference(Radius, Result) {
    const radius = parseFloat(document.getElementById(Radius).value);

    if (isNaN(radius)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid radius.';
    } else {
      const circle = new Circle(radius);
      const circumference = circle.getCircumference().toFixed(2);

      document.getElementById(Result).innerHTML = `The circumference is ${circumference}`;
    }
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
