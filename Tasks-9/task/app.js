const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.render("index");
});



app.post("/calc", function(req, res) {
  console.log(req.body);
  let result = calc(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.json(result);
});
const operations = {
  "mul": {
    sign: "*",
    calc: (a, b) => {
      return a * b;
    }
  },
  "div": {
    sign: "/",
    calc: (a, b) => {
      return a / b;
    }
  },
  "add": {
    sign: "+",
    calc: (a, b) => {
      return a + b;
    }
  },
  "sub": {
    sign: "-",
    calc: (a, b) => {
      return a - b;
    }
  }
};

calc = function(data) {
  let result = operations[data.operator].calc(parseInt(data.val1), parseInt(data.val2));
  return 'result: ' + result;
}

app.listen(3000);
