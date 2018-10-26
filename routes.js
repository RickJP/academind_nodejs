const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><form action="/message" method="POST">
    <input type="text" name="message"><button type="submit">
    SEND</button></form></body>`);
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.log', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });   
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Great Page</title></head>');
  res.write('<body><h1>Look foward to learning.</h1></body>');
  res.write('</html>');
  res.end();



};

// module.exports = {
//   handler: requestHandler,
//   demoText: 'A nice message',
//   value:  200
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'A great message';

exports.handler = requestHandler;
exports.someText = 'A good day!';