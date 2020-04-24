export const updatePageNumbers = (document) => {
  const totalPage = document.childNodes.length
  let i = 1
  for(const node of document.childNodes){
    const headerNode = node.firstChild
    headerNode.innerText = `Page ${i} of ${totalPage}`
    i++
  }
}
