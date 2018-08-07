var fizzBuzz = function() {};

fizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

fizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

fizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

fizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

fizzBuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  return number;
};
