import { Controller } from "stimulus"

export default class extends Controller {
  flip() {
    console.log(this.element)
    this.element.classList.toggle('flashcard--flipped')
  }
}
