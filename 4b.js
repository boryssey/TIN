var fact = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
}
console.log("factorial of 4 = " + fact(4));
