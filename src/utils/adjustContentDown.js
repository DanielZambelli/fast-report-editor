import { isOverflown } from './isOverflown'
import { insertPageAfter } from './insertPageAfter'

export const adjustContentDown = (pageNode) => {

  if(!isOverflown(pageNode)) return

  // if there is no next page
  if(!pageNode.nextSibling)
    insertPageAfter(pageNode)

  // grab and move last node to top of next page
  while(isOverflown(pageNode)){
    const node = pageNode.lastChild
    if(node.innerText === '')
      node.remove()
    else
      pageNode.nextSibling.insertBefore(node, pageNode.nextSibling.childNodes[1])
  }

  if(pageNode.nextSibling)
    return adjustContentDown(pageNode.nextSibling)
}
