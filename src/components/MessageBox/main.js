import Vue from 'vue'
import Main from './index.vue'
const MessageConstructor = Vue.extend(Main)
let arr = []
function Message(options) {
  if (typeof options == 'string') {
    options = {
      message: options
    }
  }
  let message = new MessageConstructor({ data: options })

  message.$mount()

  message.close = function () {
    message.$el.parentNode.removeChild(message.$el) 
    let index = arr.findIndex(item => item.id == message.id)
    index > -1 && arr.splice(index, 1)
  }
  message.id = + new Date()
  document.body.appendChild(message.$el)
  arr.unshift(message)
  arr.map((item,index) =>{
    item.top = 50 * index
  })
}
['error', 'success', 'info', 'warning'].map(item => {
  Message[item] = (options) => {
    if (typeof options == 'string') {
      options = {
        message: options
      }
    }
    options.type = item
    return Message(options)
  }
})

export default Message
