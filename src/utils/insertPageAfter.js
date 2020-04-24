import { updatePageNumbers } from './updatePageNumbers'

export const insertPageAfter = (pageNode, innerHTML = '', shouldUpdatePageNumbers = true) => {
  const blankPageNode = document.createElement('div')
  blankPageNode.className = 'page'
  blankPageNode.innerHTML = '<div class="page-header">...</div>' + innerHTML.trim()

  const documentNode = pageNode.parentNode
  documentNode.append(blankPageNode)
  pageNode.parentNode.insertBefore(blankPageNode, pageNode.nextSibling)

  const totalPages = documentNode.childNodes.length
  const currentPageNumber = Array.from(documentNode.childNodes).findIndex(node => blankPageNode === node) + 1
  blankPageNode.firstChild.innerText = `Page ${currentPageNumber} of ${totalPages}`

  if(shouldUpdatePageNumbers) updatePageNumbers(pageNode.parentNode)
}
