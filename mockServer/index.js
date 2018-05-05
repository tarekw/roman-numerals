const express = require('express');
const cors = require('cors');

const port = 3333;

// These functions were taken from "http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter"
function romanize (num) {
  if (!+num)
    return '';
  var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

function deromanize (str) {
  var str = str.toUpperCase(),
    validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
    token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
    key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
    num = 0, m;
  if (!(str && validator.test(str)))
    return 0;
  while (m = token.exec(str))
    num += key[m[0]];
  return num;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
};

const app = express()
    .use(logger)
    .use(cors())
    .get('/convertNumberToRoman', (req, res) => {
      let number = 0;
      if (req.query && req.query.number) {
        number = req.query.number;
      }
      res.status(200).json({
        roman: romanize(number)
      })
    })
    .get('/convertRomanToNumber', (req, res) => {
      let roman = '';
      if (req.query && req.query.roman) {
        roman = req.query.roman;
      }
      res.status(200).json({
        number: deromanize(roman)
      })
    });

app.listen(port, () => console.log(`App running on port ${port}`));