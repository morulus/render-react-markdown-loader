const loader = require("render-react-markdown-loader");
const rrmOptions = require("render-react-markdown-config");

export default function runLoader(content) {
  const context = {
    query: rrmOptions
  };

  return loader.apply(context, [ content ]);
}
