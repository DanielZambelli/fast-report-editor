import React, { Component } from 'react'
import './app.scss'
import { findParentNode } from './utils/findParentNode'
import { getCaretPosition } from './utils/getCaretPosition'
import { adjustContentUpOnPage } from './utils/adjustContentUpOnPage'
import { adjustContentDown } from './utils/adjustContentDown'
import { generateDemoContentWithPages } from './utils/generateDemoContentWithPages'

class App extends Component {

  handleKeyUp = (event) => {
    // guard against when focus is outside of document
    if(event.target.nodeName === 'BODY') return

    // remove node if its empty
    if(event.code === 'Backspace' && event.target.innerText === '') return event.target.remove()

    const pageNode = findParentNode(event.target, node => node.className === 'page')
    if(event.code === 'Backspace' && getCaretPosition() === 0 && event.target === pageNode.childNodes[1])
      return adjustContentUpOnPage(pageNode.previousSibling)

    if(event.code !== 'Backspace')
      return adjustContentDown(pageNode)
  }

  handleKeyDown = (event) => {
    const offset = 250
    const target = event.target
    const pageNode = this.doc.firstChild
    if(target.offsetHeight >= pageNode.offsetHeight - offset)
      if(event.key !== 'Backspace') return event.preventDefault()
  }

  componentDidMount(){
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('keydown', this.handleKeyDown)
    generateDemoContentWithPages(this.doc, 200)
  }

  // handleClickAutoFormat = () => {
  //   const is = window.confirm('Auto format will take a few seconds, please confirm')
  //   if(is) adjustContentUpOnPage(this.doc.firstChild, true)
  // }

  // handlePrintClick = () => {
  //   this.app.classList.toggle('print-mode')
  // }

  render() {
    return (
      <div className="app" ref={ref => this.app = ref}>
        {/* <div className="toolbar">
          <div className="btn" onClick={this.handleClickAutoFormat}>Auto format</div>
          <div className="btn" onClick={this.handlePrintClick}>Print version</div>
        </div> */}
        <div className="document" ref={ref => this.doc = ref}>
          <div className="page">
            <div className="page-header">Page x of y</div>
            <h1 contentEditable suppressContentEditableWarning>Table</h1>
            <div contentEditable suppressContentEditableWarning>
              Placeholder date: <span contentEditable={false} className="placeholder placeholder-date">DD.MM.YYYY</span>
            </div>
            <table className="two-cols">
              <tbody>
                <tr>
                  <td contentEditable suppressContentEditableWarning>Text</td>
                  <td contentEditable suppressContentEditableWarning>Text</td>
                </tr>
                <tr>
                  <td contentEditable suppressContentEditableWarning>Text</td>
                  <td contentEditable suppressContentEditableWarning>Text</td>
                </tr>
                <tr>
                  <td contentEditable suppressContentEditableWarning>Text</td>
                  <td contentEditable suppressContentEditableWarning>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="page">
            <div className="page-header">Page x of y</div>
            <h1 contentEditable suppressContentEditableWarning>Text</h1>
            {/* <div className="line" style={{ top: '887px' }}></div> */}
            <p contentEditable suppressContentEditableWarning>
              Donec consectetur mattis metus, id auctor risus hendrerit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat augue non eleifend euismod. Morbi consectetur luctus urna vel consectetur. Nunc ultrices augue et massa cursus, nec laoreet ipsum lobortis. Phasellus volutpat dolor nec eros vulputate pretium. Cras pharetra, arcu id egestas placerat, ligula arcu pulvinar lorem, et consectetur nibh enim in sem. Nullam tempor quam id iaculis volutpat. Phasellus vehicula suscipit libero, nec commodo nibh dictum a. Vestibulum neque sapien, tincidunt eget ex non, rhoncus blandit nibh. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rhoncus condimentum nibh vitae vehicula. Curabitur sed odio quis mi porta dapibus id vitae est. Nunc eget nulla auctor, commodo est vitae, tincidunt dolor.<br/><br/>
              Donec ullamcorper venenatis metus ut pharetra. Proin non nibh metus. In rutrum gravida sem at convallis. Vestibulum non maximus eros. Quisque tempus enim sed risus consectetur, quis semper dui commodo. Duis quis lacus nec nulla auctor tincidunt. Curabitur nec orci quis erat auctor efficitur at in erat. Integer fermentum commodo tincidunt. Duis tincidunt imperdiet erat quis congue. Etiam ac elementum odio. Suspendisse tincidunt neque tortor, eu tincidunt elit faucibus vel. Integer sed leo faucibus, sodales odio a, faucibus leo. Nullam diam ligula, vehicula vitae nibh eget, finibus elementum erat.
            </p>
            <p contentEditable suppressContentEditableWarning>
              Donec consectetur mattis metus, id auctor risus hendrerit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat augue non eleifend euismod. Morbi consectetur luctus urna vel consectetur. Nunc ultrices augue et massa cursus, nec laoreet ipsum lobortis. Phasellus volutpat dolor nec eros vulputate pretium. Cras pharetra, arcu id egestas placerat, ligula arcu pulvinar lorem, et consectetur nibh enim in sem. Nullam tempor quam id iaculis volutpat. Phasellus vehicula suscipit libero, nec commodo nibh dictum a. Vestibulum neque sapien, tincidunt eget ex non, rhoncus blandit nibh. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rhoncus condimentum nibh vitae vehicula. Curabitur sed odio quis mi porta dapibus id vitae est. Nunc eget nulla auctor, commodo est vitae, tincidunt dolor.<br/><br/>
              Donec ullamcorper venenatis metus ut pharetra. Proin non nibh metus. In rutrum gravida sem at convallis. Vestibulum non maximus eros. Quisque tempus enim sed risus consectetur, quis semper dui commodo. Duis quis lacus nec nulla auctor tincidunt. Curabitur nec orci quis erat auctor efficitur at in erat. Integer fermentum commodo tincidunt. Duis tincidunt imperdiet erat quis congue. Etiam ac elementum odio. Suspendisse tincidunt neque tortor, eu tincidunt elit faucibus vel. Integer sed leo faucibus, sodales odio a, faucibus leo. Nullam diam ligula, vehicula vitae nibh eget, finibus elementum erat.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
