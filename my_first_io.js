/* Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines (\n) it contains to the
console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument (i.e., process.argv[2]). You do not need to make
your own test file.*/


// require node's filesystem module
var fs = require('fs');
// accept one command-line arguement
var file = process.argv[2];
// All synchronous filesystem methods in fs module end with 'Sync'
// readFileSync() method returns a Buffer object containing contents of file
// Buffer objects are Node's way of efficiently representing arbitrary arrays
//  of data, whether it be ascii, binary or some other format.
// see fs module documentation for more deets
file_content = fs.readFileSync(file)
// buffer objects can be converted to strings using .toString()
// or you can also use a 'utf' flag arguement to get a String object
// fs.readFileSync(file, 'utf8')
file_string = file_content.toString();
// split string into array at new line delimiter
lines = file_string.split('\n');
// subtract one as last line doesn't have the delimiter
file_length = lines.length - 1;
// global output the file_length
console.log(file_length);

// this program counts the number of lines in a file passed in as a commnad line argument

// sample command:
// $ node my_first_io.js baby_steps.js
// 20
