export const on = (function () {
  return function (element, event, handler) {
    element.addEventListener( event, handler)
  }
})()