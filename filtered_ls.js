//file:///C:/Users/cluhring/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/fs.html#fs_fs_readfilesync_filename_options
var fs = require('fs');
//file:///C:/Users/cluhring/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/path.html
var path = require('path');
// first arg is file path
var folder = process.argv[2];
// second arg is file type
var file_type = process.argv[3];
// Asynchronous readdir(3). Reads the contents of a directory.
// The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
fs.readdir(folder, function(err, list) {
// loop through files
  for (i = 0; i < list.length; i++) {
// if extname = second arg
    if (path.extname(list[i]) === "." + file_type) {
// return it
      console.log(list[i]);
    };
  };
});


// Instead of looping, forEach is a little cleaner

//fs.readdir(folder, function(err, list) {
  //list.forEach(function(file) {
    //if (path.extname(file) === "." + file_type) {
      //console.log(file);
    //};
  //});
//});
