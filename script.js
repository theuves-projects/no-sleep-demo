window.addEventListener('load', () => {
  const ns = new NoSleep()
  const btn = document.querySelector('#button')

  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active')

    btn.classList.contains('is-active')
      ? ns.disable()
      : ns.enable()
  })
})