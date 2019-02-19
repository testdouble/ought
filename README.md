# ought

This module combines your underlying Node.js runtime's
[assert](https://nodejs.org/api/assert.html) module's assertions with the
pleasant diffing output from the [ava](https://github.com/avajs/ava) test
runner (which is actually powered by
[concordance](https://github.com/concordancejs/concordance)).

To avoid adding unnecessary overhead to your tests, ought goes out of its way to
not `require` any of its diffing and printing dependencies unless one of your
assertions has actually failed.

## Usage

Install it:

```
npm install -D ought
```

Use it:

```js
const ought = require('ought')

module.exports = function myTest () {
  const result = 34 + 43

  ought.equal(result, 77)
}
```

The other method is `ought.notEqual`.

## API

### Assertions

* `ought.equal(actual, expected, message)` - Other than the pretty failure
  message, behavior should exactly match
  [assert.deepStrictEqual](https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message)
* `ought.notEqual(actual, expected, message)` - This one just calls [assert.notDeepStrictEqual](https://nodejs.org/api/assert.html#assert_assert_notdeepstrictequal_actual_expected_message)

We would've kept the original assertion names, but we hate typing.

### Configuration

You can configure ought with `ought.config`. Defaults follow:

```js
ought.config({
  color: true
})
```

## Output

What does the output look like? The theme's colors need some tweaking, but for
now the output of
[test.js](https://github.com/testdouble/ought/blob/a0bfcb69c3d06f4cdff86649010479a387852915/test.js#L5-L33)'s
failing test looks like this:

<img width="604" alt="screen shot 2019-02-18 at 6 51 21 pm" src="https://user-images.githubusercontent.com/79303/52981528-3c452000-33ae-11e9-92eb-893e3465a9c6.png">

