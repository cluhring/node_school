var nums = process.argv;
var sum = 0;

for (i = 2; i < nums.length; i++) {
  sum += parseInt(nums[i]);
}

console.log(sum);
