const loader = require('../../lib/index.js')
const hereDirectory = require.resolve('.');
const rrmOptions = require('../render-react-markdown.config.js')

export default function runLoader(content) {
  const context = {
    query: rrmOptions
  }

  return loader.apply(context, [content])
}
