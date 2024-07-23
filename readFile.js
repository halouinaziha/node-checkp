const fs = require('fs');

// File name
const fileName = 'welcome.txt';

// Read from the file
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`Content of "${fileName}": ${data}`);
});