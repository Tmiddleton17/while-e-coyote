const prompt = require('prompt-sync')({sigint: true });

//! Prompts use for initial string;
console.log("Enter a string: ");
let str = prompt("> ");
console.log("");

//! Saves initial string as str2;
let str2 = str;

//! while str length is less than 10 the loop will continue;
while (str.legnth < 10) {
    console.log(str);

    //! Adds initial string (str2) to the end of new string;
    str = str + str2;
}
console.log(str);
console.log('Done!');