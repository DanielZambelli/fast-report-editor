import { getNodeHeight } from './getNodeHeight'
const PAGE_HEADER_HEIGHT_PX = 37

export const getPageRemaningHeight = (pageNode) => {
  const paddingBorder = (55 + 1 ) * 2
  const pageNodeContentAreaHeight = getNodeHeight(pageNode) - paddingBorder
  const lastNodeOnPage = pageNode.lastChild
  const lastNodeOnPageOffsetY = lastNodeOnPage.offsetTop + lastNodeOnPage.offsetHeight
  return pageNodeContentAreaHeight - lastNodeOnPageOffsetY - PAGE_HEADER_HEIGHT_PX
}
