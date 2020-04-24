import { getPageRemaningHeight } from './getPageRemaningHeight'
import { getNodeHeight } from './getNodeHeight'

export const adjustContentUpOnPage = (pageNode, deep = false) => {

  // remove last page if its empty
  if(pageNode && !pageNode.childNodes[1] && !pageNode.nextSibling) {
    pageNode.remove()
    return
  }

  // recursion base case
  if(!pageNode || !pageNode.nextSibling) return

  while(true){

    const nextPageNode = pageNode.nextSibling
    if(!nextPageNode) break

    const pageRemaningHeight = getPageRemaningHeight(pageNode)
    if(pageRemaningHeight <= 35) break

    const nextPageContainerNode = nextPageNode.childNodes[1]
    // if next page has no contnet, e.g. if its the last page and its just blank
    if(!nextPageContainerNode){ break }
    const nextPageContainerNodeHeight = getNodeHeight(nextPageContainerNode)

    if(pageRemaningHeight >= nextPageContainerNodeHeight){
      pageNode.append(nextPageContainerNode)
      if(!deep) nextPageContainerNode.focus()
      if(deep) adjustContentUpOnPage(pageNode, deep, false)
    }else break

    if(!deep) break
  }

  if(deep) return adjustContentUpOnPage(pageNode.nextSibling, deep)
}
