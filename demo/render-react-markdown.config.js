const CoffeeScript = require('coffeescript')

module.exports = {
  languages: {
    coffee: code => ({
      code: CoffeeScript.compile(code)
    })
  }
}
