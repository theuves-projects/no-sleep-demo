window.addEventListener('load', () => {
  const ns = new NoSleep()
  const btn = document.querySelector('#button')

  btn.addEventListener('click', () => {
    const isEnable = btn.classList.contains('is-enable')

    if (isEnable) {
      ns.disable()
      btn.innerText = 'Ativar NoSleep.js'
      btn.classList.remove('is-enable')
    } else {
      ns.enable()
      btn.innerText = 'Desativar NoSleep.js'
      btn.classList.add('is-enable')
    }
  })

  /**/ const event = new MouseEvent('click', {
  /**/  view: window,
  /**/  bubbles: true,
  /**/  cancelable: true
  /**/ });

  /**/ btn.dispatchEvent(event)
})