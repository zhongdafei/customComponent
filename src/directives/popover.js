export const popover = {
  inserted: function (el, binding, vnode) {
    // el:当前节点, binding:里面能拿到传参, vnode：Vue 编译生成的虚拟节点。
    console.log(el, '12345', binding, vnode);
    let popover = vnode.context.$refs[binding.arg]
    popover.$refs.reference = el
    console.log(popover);
  }
}