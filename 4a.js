var fibonacci = function fib(num) {
  return num <= 1 ? 1 : fib(num - 1) + fib(num - 2);
}
console.log("Fibonacci seqeunce at 4 = " + fibonacci(4));
