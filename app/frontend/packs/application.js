import Turbolinks from 'turbolinks';
import 'style';
import { clicker } from '../clicker';

// Turbolinks
Turbolinks.start();

document.addEventListener("turbolinks:load", () => {
  clicker.initialize()
})
