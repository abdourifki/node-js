const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});
