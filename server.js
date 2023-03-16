const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  let content = '<div>404</div>'
  if (url == '/' || url == '/index') {
    content = '<div>index</div>'
  } else if (url == '/about') {
    content = '<div>about</div>'
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end(content)
})
server.listen(80, () => {

})