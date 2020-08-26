const request = require('request');
const fs = require('fs');

const site = 'http://www.example.edu/';

const writeFile = (file) => {
  fs.writeFile('index.html', file,'utf8', (error) => {
    if (error) throw error;
  });
};
const requestedSite = request(site, (error, response, body)=>{
  console.log("error: ", error);
  console.log("response: ", response && response.statusCode);
  return body;
});
const data = new Uint8Array(Buffer.from(requestedSite, 'utf8'));
writeFile(data);