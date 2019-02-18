function sum(numbers) {
  // return numbers.reduce((carry, acc) => carry +acc, 0);
  let result = 0

  for (let index = 0; index < numbers.length; index++) {
    result += numbers[index]
  }

  return result
}

module.exports = sum