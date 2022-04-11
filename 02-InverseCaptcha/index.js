const puzzleInput = require("./input");
const { sum } = require("lodash");

const solveCaptcha = (input, compareWithNextDigit = true) => {
  const solutionArray = [];

  const singleDigitsInput = input.toString().split("");
  const indexAddition = compareWithNextDigit ? 1 : singleDigitsInput.length / 2;

  for (let index = 0; index < singleDigitsInput.length; index++) {
    const digit = singleDigitsInput[index];
    const nextDigit =
      singleDigitsInput[index + indexAddition] ||
      singleDigitsInput[compareWithNextDigit ? 0 : index - indexAddition];

    if (digit === nextDigit) solutionArray.push(+digit);
  }

  const solution = sum(solutionArray);
  return solution;
};

console.log(solveCaptcha(puzzleInput)); // AoC part 1 result is 995
console.log(solveCaptcha(puzzleInput, false)); // AoC part 2 result is 1130

module.exports = solveCaptcha;
