/*
  MIT License

  Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
  Copyright (c) Justin Searls <searls@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const ansiStyles = require('ansi-styles')
const chalk = new (require('chalk').constructor)()

const forceColor = new chalk.constructor({ enabled: true })

const colorTheme = {
  boolean: ansiStyles.yellow,
  circular: forceColor.grey('[Circular]'),
  date: {
    invalid: forceColor.red('invalid'),
    value: ansiStyles.blue
  },
  diffGutters: {
    actual: forceColor.red('-') + ' ',
    expected: forceColor.green('+') + ' ',
    padding: '  '
  },
  error: {
    ctor: { open: ansiStyles.grey.open + '(', close: ')' + ansiStyles.grey.close },
    name: ansiStyles.magenta
  },
  function: {
    name: ansiStyles.blue,
    stringTag: ansiStyles.magenta
  },
  global: ansiStyles.magenta,
  item: { after: forceColor.grey(',') },
  list: { openBracket: forceColor.grey('['), closeBracket: forceColor.grey(']') },
  mapEntry: { after: forceColor.grey(',') },
  maxDepth: forceColor.grey('…'),
  null: ansiStyles.yellow,
  number: ansiStyles.yellow,
  object: {
    openBracket: forceColor.grey('{'),
    closeBracket: forceColor.grey('}'),
    ctor: ansiStyles.magenta,
    stringTag: { open: ansiStyles.magenta.open + '@', close: ansiStyles.magenta.close },
    secondaryStringTag: { open: ansiStyles.grey.open + '@', close: ansiStyles.grey.close }
  },
  property: {
    after: forceColor.grey(','),
    keyBracket: { open: forceColor.grey('['), close: forceColor.grey(']') },
    valueFallback: forceColor.grey('…')
  },
  react: {
    functionType: forceColor.grey('\u235F'),
    openTag: {
      start: forceColor.grey('<'),
      end: forceColor.grey('>'),
      selfClose: forceColor.grey('/'),
      selfCloseVoid: ' ' + forceColor.grey('/')
    },
    closeTag: {
      open: forceColor.grey('</'),
      close: forceColor.grey('>')
    },
    tagName: ansiStyles.magenta,
    attribute: {
      separator: '=',
      value: {
        openBracket: forceColor.grey('{'),
        closeBracket: forceColor.grey('}'),
        string: {
          line: { open: forceColor.blue('"'), close: forceColor.blue('"'), escapeQuote: '"' }
        }
      }
    },
    child: {
      openBracket: forceColor.grey('{'),
      closeBracket: forceColor.grey('}')
    }
  },
  regexp: {
    source: { open: ansiStyles.blue.open + '/', close: '/' + ansiStyles.blue.close },
    flags: ansiStyles.yellow
  },
  stats: { separator: forceColor.grey('---') },
  string: {
    open: ansiStyles.blue.open,
    close: ansiStyles.blue.close,
    line: { open: forceColor.blue('\''), close: forceColor.blue('\'') },
    multiline: { start: forceColor.blue('`'), end: forceColor.blue('`') },
    controlPicture: ansiStyles.grey,
    diff: {
      insert: {
        open: ansiStyles.bgGreen.open + ansiStyles.black.open,
        close: ansiStyles.black.close + ansiStyles.bgGreen.close
      },
      delete: {
        open: ansiStyles.bgRed.open + ansiStyles.black.open,
        close: ansiStyles.black.close + ansiStyles.bgRed.close
      },
      equal: ansiStyles.blue,
      insertLine: {
        open: ansiStyles.green.open,
        close: ansiStyles.green.close
      },
      deleteLine: {
        open: ansiStyles.red.open,
        close: ansiStyles.red.close
      }
    }
  },
  symbol: ansiStyles.yellow,
  typedArray: {
    bytes: ansiStyles.yellow
  },
  undefined: ansiStyles.yellow
}

module.exports = function (color) {
  return {
    defaultOptions: { maxDepth: 3, plugins: [], theme: color ? colorTheme : undefined },
    diffOptions: { maxDepth: 1, plugins: [], theme: color ? colorTheme : undefined }
  }
}
