import { insertPageAfter } from './insertPageAfter'
import { updatePageNumbers } from './updatePageNumbers'

const page = (i) => `
  <h1 contentEditable="true">${i} Text</h1>
  <p contentEditable="true">${i} Donec consectetur mattis metus, id auctor risus hendrerit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat augue non eleifend euismod. Morbi consectetur luctus urna vel consectetur.</p>
  <p contentEditable="true">${i} Donec consectetur mattis metus, id auctor risus hendrerit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat augue non eleifend euismod. Morbi consectetur luctus urna vel consectetur.</p>
  <p contentEditable="true">${i} Donec consectetur mattis metus, id auctor risus hendrerit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat augue non eleifend euismod. Morbi consectetur luctus urna vel consectetur.</p>
  <p contentEditable="true">${i} Donec consectetur mattis metus, id auctor risus hendrerit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat augue non eleifend euismod. Morbi consectetur luctus urna vel consectetur. Nunc ultrices augue et massa cursus, nec laoreet ipsum lobortis. Phasellus volutpat dolor nec eros vulputate pretium. Cras pharetra, arcu id egestas placerat, ligula arcu pulvinar lorem, et consectetur nibh enim in sem. Nullam tempor quam id iaculis volutpat. Phasellus vehicula suscipit libero, nec commodo nibh dictum a. Vestibulum neque sapien</p>
`

export const generateDemoContentWithPages = (document, pages) => {
  for(let i=1;i<pages;i++){
    insertPageAfter(document.lastChild, page(i), false)
  }
  updatePageNumbers(document)
}
