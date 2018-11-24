let operators = {
  '/add': {
    op: '+',
    calc: function(a, b){
      return a + b;
    }
  },
  '/mul': (a, b) => a * b,
  '/div': (a, b) => a / b,
  '/sub': (a, b) => a - b
};
let query = {
  operator: '/add',
  value1: 1,
  value2: 2
};
console.log(operators[query.operator].calc(query.value1, query.value2));
