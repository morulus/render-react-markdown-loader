export default function childrenToAnchore(children) {
  return children.toString().toLowerCase()
    .replace(/[\s\t]/, "-");
}
