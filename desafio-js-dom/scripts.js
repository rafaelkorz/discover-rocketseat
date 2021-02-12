const Modal = {
  open() {
    document
      .querySelector('.container-2')
      .classList
      .add('active')
  },

  close() {
    document
      .querySelector('.container-2')
      .classList
      .remove('active')
  }
}

document.querySelector('body').addEventListener('keydown', (event) => {

  var tecla = event.keyCode

  if (tecla == 27) {
    Modal.close()
  }
})