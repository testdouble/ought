const concordance = require('concordance')
const concordanceOptions = require('./concordance-options')

module.exports = function diff (actual, expected, color) {
  const { defaultOptions, diffOptions } = concordanceOptions(color)
  const result = concordance.compare(actual, expected, defaultOptions)

  return concordance.diffDescriptors(
    result.actual || concordance.describe(actual, defaultOptions),
    result.expected || concordance.describe(expected, defaultOptions),
    diffOptions
  )
}
