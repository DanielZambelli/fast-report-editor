export const getCaretPosition = () => {
  if (window.getSelection) {
    const sel = window.getSelection()
    if (sel.getRangeAt) return sel.getRangeAt(0).startOffset
  }
  return null
}
