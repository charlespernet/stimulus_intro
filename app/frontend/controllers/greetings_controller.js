import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['message', 'input']

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  greet() {
    console.log('Oh you want the greet ?')
    const name = this.inputTarget.value || this.name
    this.name = name
    this.messageTarget.innerText = `"Welcome ${name}"`
    this.messageTarget.classList.add('message--revealed')
  }

  get name() {
    return this.data.get('name')
  }

  set name(value) {
    this.data.set('name', value)
  }
}
