const chai = require('chai')
const expect = chai.expect
const sum = require('../src/sum')
const {discount, tax, makeItPretty} = require('../src/payment')

// unit testing
it('should return 3 when sum is called with 1, 2', function() {
  expect(sum([1, 2])).to.equal(3)

  expect(sum([1, 2, 3])).to.equal(6)

  expect(sum([1, 2, 3, 4])).to.equal(10)
})

// Integration Testing
it('should return the correct payment amount', function() {
  // Ketika user pengen bayar barang dengan harga 1000, 2000, 1500
  // Hasilnya harus 4500

  const items = [1000, 2000, 1500]

  const result = sum(items)

  expect(result).to.equal(4500)

  // Ketika saya member platinum dapat diskon 20%
  // Hasilnya harus 3600 (4500 - 900)

  const withDiscount = discount(result, 20)

  expect(withDiscount).to.equal(3600)

  // Taat pajak harus ditambahkan 10%
  // 3600 + 360 = 3960

  const withTax = tax(withDiscount, 10)

  expect(withTax).to.equal(3960)

  // Dipercantik lah tampilannya
  // IDR 3,960

  const pretty = makeItPretty(withTax)

  expect(pretty).to.equal('IDR 3,960')
})
