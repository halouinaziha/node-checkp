const fs = require('fs');

const fileContent = 'Hello Node';

const fileName = 'welcome.txt';

fs.writeFile(fileName, fileContent, (err) => {
  if (err) throw err;
  console.log(`File "${fileName}" has been created with content: "${fileContent}"`);
});