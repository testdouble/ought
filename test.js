const ought = require('./index')

module.exports = {
  'fail' () {
    ought.equal({
      isActive: true,
      age: 42,
      birthday: new Date('1977-02-03'),
      pets: [
        'Cliffy',
        'Clinger',
        'Steve'
      ],
      deep: {
        dark: {
          secrets: ['wait', 'for', 'it']
        }
      }
    }, {
      isActive: true,
      age: 42,
      birthday: new Date('1977-02-03'),
      pets: [
        'Clifford',
        'Jacob',
        'Steve'
      ],
      deep: {
        dark: {
          secrets: ['wait', 'for', 'it', 'pandas']
        }
      }
    })
  },
  'pass' () {
    ought.equal({
      isActive: true,
      age: 42,
      birthday: new Date('1977-02-03'),
      pets: [
        'Cliffy',
        'Clinger',
        'Steve'
      ],
      deep: {
        dark: {
          secrets: ['wait', 'for', 'it']
        }
      }
    }, {
      isActive: true,
      age: 42,
      birthday: new Date('1977-02-03'),
      pets: [
        'Cliffy',
        'Clinger',
        'Steve'
      ],
      deep: {
        dark: {
          secrets: ['wait', 'for', 'it']
        }
      }
    })
  }
}
