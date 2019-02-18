const AssertionError = require('assert').AssertionError
const diff = require('./diff')

module.exports = function throwError ({ operator, actual, expected }, message) {
  throw new AssertionError({
    operator,
    actual,
    expected,
    message: message + diff(actual, expected)
  })
}
