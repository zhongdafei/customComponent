import Vue from 'vue'
import Main from './index.vue' 
let MessageConstructor = Vue.extend(Main)
let sea = 0
let messages = []
let messageIds = []

function Message(options) {
  if( typeof options == 'string'){
    options = {
      message:options
    }
  }
  let id =  'message_' + ++sea
  options.id = id
  options.onClose = function (params) {
   Message.close(id)
  }
  let message = new MessageConstructor({data:options})
  // 将实例挂载 得到$el
  message.$mount()
  messages.map((item,i) =>{
    item.top = (item.$el.offsetHeight + 16) * ( i + 1 )
  })
  // message.top = messages.length *( message.$el.offsetHeight + 16)
  document.body.appendChild(message.$el)
  messages.unshift(message)  
  
}
['success','error','info','warning'].map(type => {
  Message[type] = function (options) {
    if(typeof options == 'string'){
      options = {
        message: options 
      }
    }
    options.type = type
    return Message(options)
  }
})
Message.close = function(id){ 
  for (let i = 0; i < messages.length; i++) {
    const element = messages[i];  
    if(element.id == id){
      element.$el.parentNode.removeChild(element.$el)
      messages.splice(i,1)
    } 
  } 
}
export default Message