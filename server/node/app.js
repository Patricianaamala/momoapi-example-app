// MTN MoMo APi app



// Routes:
// Config
// Serving: Images, CSS, javascripts
// HTTP:
// Get Products
// Retrieve Products
// Make Order
// Pay Order
//
// Recieving Callbacks


// GET Request Framework
const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
