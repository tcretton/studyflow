const fs = require('fs')

console.log('1')

fs.readFile('05-hof.js', (err, content) => {
  if (!err) {
    console.log(content.toString())
  }
})

console.log('2')