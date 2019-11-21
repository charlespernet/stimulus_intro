import { Controller } from "stimulus"

export default class extends Controller {
  flip() {
    this.element.classList.toggle('flashcard--flipped')
  }
}
