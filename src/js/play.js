const btnNewQ = document.getElementById('newQ');
const dialog = document.getElementById('formQ');
function openDialog() {
  dialog.showModal();
  dialog.open();
  console.log(dialog);
}
// events
btnNewQ.addEventListener('click', openDialog);

