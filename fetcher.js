const request = require('request');
const fs = require('fs');

const site = 'http://www.example.edu/';

const writeFile = (file) => {
  fs.writeFile('index.html', file,'utf8', (error) => {
    if (error) throw error;
  });
};
request(site, (error, response, body)=>{
  console.log("error: ", error);
  console.log("response: ", response && response.statusCode);
  writeFile(body);
});
