import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['card']

  connect() {
    this.showCard()
  }

  showCard() {
    this.cardTargets.forEach((el, i) => {
      el.classList.toggle("flashcard--current", this.index == i)
    })
  }

  next() {
    if (this.index < 5) {
      this.index++
    }
  }

  previous() {
    if (this.index > 0) {
      this.index--
    }
  }

  get index() {
    return parseInt(this.data.get('index'), 10)
  }

  set index(value) {
    this.data.set('index', value)
    this.showCard()
  }
}
