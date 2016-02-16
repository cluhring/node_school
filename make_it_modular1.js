// sets myModule to equal module in another file
// which is exported as a function I can call
var myModule = require('./make_it_modular2')

// program accepts a directory path & filter arg specifying file type
directory_name = process.argv[2];
extension_filter = process.argv[3];

// function w/ 3 args and a callback function
myModule(directory_name, extension_filter, function(err, data_array) {
// if function returns an error, console.log that error
  if (err) {
    console.log(err);
  } else {
// otherwise, loop through array/data and console.log filtered files
    data_array.forEach(function(file) {
      console.log(file);
    });
  };
});
