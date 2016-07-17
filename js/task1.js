function quadraticEquation() {
var a = document.getElementsByName('a')[0].value || 1;
var b = document.getElementsByName('b')[0].value || 1;
var c = document.getElementsByName('c')[0].value || 0;
var discr = (b * b) - 4 * (a * c);
var x1, x2, x;
  if (discr > 0) {
    x1 = (-b + Math.sqrt(discr)) / (2 * a);
    x2 = (-b - Math.sqrt(discr)) / (2 * a);
    console.log("Рівняння ax\u00B2 + bx + c = 0 має 2 розв’язки: x1 = " + x1 + " , x2 = " + x2);
  }
  else if (discr == 0) {
    x= -b / (2 * a);
    console.log("Рівняння ax\u00B2 + bx + c = 0 має 2 розв’язки: x1 = x2 = " + x);
  }
  else if (discr < 0) {
    console.log("Рівняння розв'язків немає, дискимінант рівний: " + discr);
  }
}
