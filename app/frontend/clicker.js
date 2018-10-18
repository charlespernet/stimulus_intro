const clicker = {
  initialize() {
    const button = document.querySelector('.cd-add-to-cart')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const count = document.querySelector('.item-count')
      const value = parseInt(count.innerText, 10)
      count.innerText = value + 1
      count.classList.add('bumped')
      count.addEventListener("transitionend", () => count.classList.remove('bumped'))
    })
  }
}

export { clicker }
