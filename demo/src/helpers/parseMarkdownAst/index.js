export default function parseMarkdownAst(ast) {
  let headings = [];

  for (let i = 0; i < ast.length; i++) {
    switch (ast[i].type) {
    case "section":
      headings = headings.concat(parseMarkdownAst(ast[i].body));
      break;
    case "heading":
      headings.push(ast[i]);
      break;
    default:
      // Ignore
      break;
    }
  }

  return headings;
}
