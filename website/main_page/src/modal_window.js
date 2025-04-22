function openModalWindow(e1, e2) {
  e1.style.display = 'none'
  e2.style.display = 'flex'
}
function closeModalWindow(e1, e2) {
  e1.style.display = 'flex'
  e2.style.display = 'none'
}
export { openModalWindow, closeModalWindow }
