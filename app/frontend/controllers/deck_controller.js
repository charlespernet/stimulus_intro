import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['card']

  connect() {
    this.showCard()
  }

  showCard() {
    this.cardTargets.forEach((el, i) => {
      el.classList.toggle("card--curent", this.index == i)
    })
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  get index() {
    return parseInt(this.data.get('index'), 10)
  }

  set index(value) {
    this.data.set('index', value)
    this.showCard()
  }
}
