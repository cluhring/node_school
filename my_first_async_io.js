// file:///C:/Users/cluhring/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/fs.html#fs_fs_readfilesync_filename_options
var fs = require('fs');

var file = process.argv[2];
// readFile is async method that requires a callback function
// that function checks for errors, looking for truthy arg
// if no error, returns string, which is split & counted :)
fs.readFile(file, 'utf8', function(err, string_file) {
  lines = string_file.split('\n');
  line_count = lines.length - 1;
  console.log(line_count);
});
