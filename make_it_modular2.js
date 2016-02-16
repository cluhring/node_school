// require node file system module
var fs = require('fs');
// require node path module
var path = require('path');
// create an array
var correct_array = [];

// function accepts 3 args, last being the callback
function filterFolder (folder, extension_filter, callback) {
// Asynchronous readdir(3). Reads the contents of a directory.
// The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
  fs.readdir(folder, function(err, files) {
// if error, send error message back via callback
    if (err) {
      return callback(err);
// otherwise, filter files by looping through directory contents
    } else {
      files.forEach(function(file) {
        if (path.extname(file) === "." + extension_filter) {
// and put them into empty array
          correct_array.push(file);
        };
      });
// after closing loop, send array back through callback
      return callback(null, correct_array)
    };
  });
};
// make the above function available to export into another file
module.exports = filterFolder;

// note - The filter() method creates a new array with
// all elements that pass the test implemented by the provided function.
// therefore could do something like this:
// list = list.filter(function (file) {
    // return path.extname(file) === '.' + extension_filter
// })
// callback(null, list)
