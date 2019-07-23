const btnNewQ = document.getElementById('newQ');
const dialog = document.getElementById('formQ');
function openDialog() {
  dialog.showModal();
  dialog.open();
}
// events
btnNewQ.addEventListener('click', openDialog);
