const fs = require('fs')

fs.readFile('05-hof.js', (err, content) => {
  if (!err) {
    console.log(content.toString())
  }
})