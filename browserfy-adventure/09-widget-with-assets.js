var domify = require('domify')
var insertCSS = require('insert-css')
var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

var html = '<form class="send"><textarea type="text" name="msg"></textarea><input type="submit" value="submit"></form>'

var css = '.send textarea {background-color: purple; color: yellow; }'

module.exports = Widget
inherits(Widget, EventEmitter)

//I think this is basically a singleton
function Widget () {
  if (!(this instanceof Widget)) {
    return new Widget
  }
  this.element = domify(html)

  // insert-css module is a simple wrapper that will try to load
  // the css onto the document, while it is being rendered by the browser
  // this is why it has no target (it will always run on the document)
  insertCSS(css, { prepend: true })

  var form = this.element
  var self = this

  // adding a listener to the html form we declared
  form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    var msg = form.querySelector('textarea[name=msg]').value
    self.emit('message', msg)
  })
}


Widget.prototype.appendTo = function (target) {
  target.appendChild(this.element)
}
