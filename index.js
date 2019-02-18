const assert = require('assert')

module.exports = {
  equal (actual, expected, msg) {
    try {
      assert.deepStrictEqual(actual, expected, msg)
    } catch (assertionError) {
      require('./lib/throw-error')(
        assertionError,
        msg || 'Expected actual to equal expected, but it did not:'
      )
    }
  },
  notEqual (actual, expected, msg) {
    try {
      assert.notDeepStrictEqual(actual, expected, msg)
    } catch (assertionError) {
      require('./lib/throw-error')(
        assertionError,
        msg || 'Expected actual to NOT equal expected, but it actually did:'
      )
    }
  }
}
