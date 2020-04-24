export const findParentNode = (node, findCallback) => {
  while(node && node.className !== 'document'){
    node = node.parentNode
    if(findCallback(node)) return node
  }
  return null
}
