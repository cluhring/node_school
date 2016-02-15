// process.argv = access command-line arguments via the global 'process' object.
// the 'process' object has an argv property which is an array that contains node, path, and arguments
var num_array = process.argv;
var sum = 0;
// loop through array, starting at arguments/numbers and add them
for (i = 2; i < num_array.length; i++) {
  sum += parseInt(num_array[i]);
  // sum += Number(num_array[i]);
}

console.log(sum);
