const assert = require('assert')

const DEFAULT_CONFIG = {
  color: true
}
const config = Object.assign({}, DEFAULT_CONFIG)

module.exports = {
  equal (actual, expected, msg) {
    try {
      assert.deepStrictEqual(actual, expected, msg)
    } catch (assertionError) {
      require('./lib/throw-error')(
        assertionError,
        config,
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
        config,
        msg || 'Expected actual to NOT equal expected, but it actually did:'
      )
    }
  },
  config (userConfig) {
    Object.assign(config, userConfig)
    return config
  }
}
