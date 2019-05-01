window.addEventListener('load', () => {
  const ns = new NoSleep()
  const btn = document.querySelector('#button')

  function enable() {
    ns.enable()
    btn.innerText = 'Ativar NoSleep.js'
  }
  function disable() {
    ns.disable()
    btn.innerText = 'Desativar NoSleep.js'
  }

  btn.addEventListener('click', () => {
    btn.classList.contains('is-enable') ? enable() : disable()
    btn.classList.toggle('is-enable')
  })
})