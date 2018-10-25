import Turbolinks from 'turbolinks';
import 'style';

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("../controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

// Turbolinks
Turbolinks.start();

console.log('Started!')
