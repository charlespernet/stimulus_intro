# Welcome to this StimulusJS introduction

Four branches are available to follow the demo
branches : [01-Config, 02-Install, 03-Data, 04-DemoEnd]

Here is what will be set for you on each :

### 01-Config
  Rails App with Webpack ready
    Note : javascript folder renamed frontend
    Important > rename in webpacker.yml
  CSS basic
  pages : [ intro ]
  TODO : Install Stimulus

  steps :
    yarn add stimulus
    add this to your application.js
    
 ```javascript
    import { Application } from "stimulus"
    import { definitionsFromContext } from "stimulus/webpack-helpers"

    const application = Application.start()
    const context = require.context("../controllers", true, /\.js$/)
    // require.context doc > https://www.npmjs.com/package/require-context
    application.load(definitionsFromContext(context))
  ```
    
  create controllers folder in frontend

  Your first controller

  ```javascript
  import { Controller } from "stimulus"

  export default class extends Controller {
    connect() {
      console.log("Hello, Stimulus!", this.element)
    }
  }
  ```
    
  doc : https://stimulusjs.org/handbook/installing

### 02-Install
  Stimulus installed and connected
  Action connected to button click event
  TODO : Connect a controller, build something en using `action` and `target`
  steps :
  Add `data-controller` `data-action` and `data-target`

```html
  <div data-controller='greetings'>
    <h1>Go Ahead and connect me !</h1>
    <div class='input-inline'>
      <input type="text" placeholder="What is your name ?" data-target='greetings.input'>
      <button data-action='greetings#greet'>YEAH !</button>
    </div>
    <p class='message' data-target="greetings.message">"HELLO STIMULUS"</p>
  </div>
```

your controller should look like this

```javascript
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['message', 'input']

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  greet() {
    console.log('Oh you want the greet ?')
    const name = this.inputTarget.value || 'BoGossDu91'
    this.messageTarget.innerText = `"Welcome ${name}"`
    this.messageTarget.classList.add('message--revealed')
  }
}
```

### 03-Data
  Let's play with data
  TODO : Give data from rails Controller, and use it in Stimulus
  steps :
    Add data-greetings-name
    Add getter and setter to your Controller

  it now looks like this :

```javascript
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
```

### 04-DemoEnd
  Let's talk about Turbolink's caching
  Then let's see another example with 2 controllers on same page
  The index is persisted in DOM so on next reload you'll be on the right slide !

Slides : https://docs.google.com/presentation/d/117M7fWZr8s_u8G2YqHIP6BntIF6MeyoxnXUnoTctaec/edit#slide=id.g465e61461d_1_1  
