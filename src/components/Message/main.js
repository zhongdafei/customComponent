import Vue from 'vue'
import main from './main.vue'
//创建构造函数
let MessageContruct = Vue.extend(main)
let instances = [];
let seed = 1;
// 创建Message函数
let Message = function (options) {
  // 判断options是否为字符串
  if (typeof options == 'string') {
    options = {
      message: options
    }
  }
  let id = 'message_' + seed++
  options.id = id
  options.onclose = function () {
    Message.close(id)
  }
  let instance = new MessageContruct({ data: options })
  // 挂载instance 拿到$el
  instance.$mount()

  let verticalOffset = 0;
  instances.map(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  console.log(instances);
  instance.verticalOffset = verticalOffset
  document.body.appendChild(instance.$el)
  instances.push(instance)
  return instance
};
['success', 'warning', 'error', 'info'].forEach(type => {
  Message[type] = function (options) {
    if (typeof options == 'string') {
      options = { message: options }
    }
    options.type = type
    return Message(options)
  }
});
Message.close = function (id) {

  instances = instances.filter(item => {
    if (item.id == id) {
      item.$el.parentNode.removeChild(item.$el)

    }
    return item.id !== id
  })
  console.log(id);
}
export default Message