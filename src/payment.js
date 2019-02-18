module.exports = {
  discount(amount, discontValue) {
    const discountedValue = amount - (amount * discontValue /100)

    // console.log(discountedValue)
    return discountedValue 
  },

  tax(amount, taxValue) {
    const taxedValue = amount + (amount * taxValue /100)

    return taxedValue
  },

  makeItPretty(amount) {
    return `IDR ${amount.toLocaleString()}`
  }
}