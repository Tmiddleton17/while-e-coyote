const prompt = require('prompt-sync')({sigint: true })

let x = prompt('Enter x: ')
let y = prompt('Enter y; ')

while (x % y != 0) {
    x = x + 1
    console.log(x)
}

console.log(x,'is divisble by',y)