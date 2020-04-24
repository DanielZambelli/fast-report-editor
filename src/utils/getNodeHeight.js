/**
 * includes padding and border
 */
export const getNodeHeight = (node) => {
  // TODO: possible to detect node type and put these together : getTextHeight
  return node.getBoundingClientRect().height
}
