import Vue from 'vue'
import Main from './index.vue'

let MessageConstructor = Vue.extend(Main)
let seed = 1;
let messs = []
let Message = function (options) {
  options = options || {}
  if (typeof options == 'string') {
    options = {
      message: options
    }
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;
  // 设置id
  options['id'] = id
  options.onClose = function () {
    Message.close(id, userOnClose);
  };
  // 创建组件
  let mess = new MessageConstructor({
    data: options
  })

  // 挂载实例
  mess.$mount()
  console.log(mess, '----->mess', seed);
  messs.push(mess)
  // 将实例帮到body上
  document.body.appendChild(mess.$el)
  return options
};
['success', 'error', 'warning', 'info'].forEach(type => {
  Message[type] = options => {
    if (typeof options == 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
});
Message.close = (id) => {
 let a = messs.find(item => item.id == id)
 console.log(messs,a,id,'===>id');
  a.$el.parentNode.removeChild(a.$el);
}
export default Message

