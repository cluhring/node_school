// file:///C:/Users/cluhring/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/fs.html#fs_fs_readfilesync_filename_options
// file:///Users/cluhring/.node/lib/node_modules/learnyounode/node_apidoc/fs.html

/* Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument. */

var fs = require('fs');

var file = process.argv[2];
// readFile() is async method that requires a callback function, which is passed in as a second argument.
// callbacks: https://github.com/maxogden/art-of-node#callbacks
// that function checks for errors, looking for truthy arg
// if no error, returns a buffer object (or string with the 'utf8' flag).
// The string is then split into array at new line delimiter & counted :)
fs.readFile(file, 'utf8', function callback (err, string_file) {
  lines = string_file.split('\n');
  line_count = lines.length - 1;
  console.log(line_count);
});

// this program counts the number of lines in a file passed in as a commnad line argument

// sample command:
// $ node my_first_async_io.js baby_steps.js
// 20
