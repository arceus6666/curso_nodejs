const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(`
  <!DOCtype html>
  <html>
    <head></head>
    <body>
      <h1>Sitio en desarrollo</h1>
    </body>
  </html>`)
  res.end()
})

servidor.listen(3000)
console.log('listening on port 3000')