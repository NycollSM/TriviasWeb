const btnNewQ = document.getElementById('newQ');
const dialog = document.getElementById('formQ');
function openDialog() {
  dialog.showModal();
  dialog.open();
}
const modal = document.querySelector('.wrapper--info-dev');
console.log(modal);
const infoBtn = document.querySelector('#infodev');
function openModal() {
  console.log('holaaaaa');
  modal.style.display = 'block';
}


// events
// mddal of info button
infoBtn.addEventListener('click', openModal);
btnNewQ.addEventListener('click', openDialog);
