const prompt = require('prompt-sync')({signal: true });

const input = prompt('Enter a number:');

//Keep track of the previous two values in the sequence
let num1 = 0;
let num2 = 1;

// Keep track of how many times we've looped
let count = 0;

// loop 'number' amount of times...
while (count < number) {


    // Increment our loop count
    count = count + 1;
    
    // Calculate the next value in the sequence
    const num3 = num1 + num2;

    console.log(num1);

    // Shift num1 and num2 one value forward in the sequence
    num1 = num2;
    num2 = num3;


    console.log('hello');
}