// require node's filesystem module
var fs = require('fs');
// accept one command-line arguement
var file = process.argv[2];
// All synchronous filesystem methods in fs module end with 'Sync'
// readFileSync() method returns a Buffer object containing contents of file
// see fs module documentation for more deets
file_content = fs.readFileSync(file)
// buffer objects can be converted to strings using .toString()
// or you can also use a 'utf' flag arguement
// fs.readFileSync(file, 'utf8')
file_string = file_content.toString();
// split string into array at new line delimiter
lines = file_string.split('\n');
// subtract one as last line doesn't have the delimiter
file_length = lines.length - 1;
// global output the file_length
console.log(file_length);
