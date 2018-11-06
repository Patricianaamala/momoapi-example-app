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

// Real Data Example (GoogleMaps)
const https = require("https");
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(
      `City: ${body.results[0].formatted_address} -`,
      `Latitude: ${body.results[0].geometry.location.lat} -`,
      `Longitude: ${body.results[0].geometry.location.lng}`
    );
  });
});

// MoMo API Examples:
// POST - /requestopay
// GET - /requestopay/{referenceid}
// POST - /Token
// GET - /v1_0/account/balance
