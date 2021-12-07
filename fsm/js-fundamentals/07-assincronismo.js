

const fs = require('fs')

fs.readfile('05-hof.js', (err, content) => {
  if (!err) {
    console.log(content.toString())
  }
})