const concordance = require('concordance')
const concordanceOptions = require('./concordance-options').default
const concordanceDiffOptions = require('./concordance-options').diff

module.exports = function diff (actual, expected) {
  const result = concordance.compare(actual, expected, concordanceOptions)

  return concordance.diffDescriptors(
    result.actual || concordance.describe(actual, concordanceOptions),
    result.expected || concordance.describe(expected, concordanceOptions),
    concordanceDiffOptions
  )
}
