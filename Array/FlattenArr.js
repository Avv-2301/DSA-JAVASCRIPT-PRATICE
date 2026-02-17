//Flatten and array

function flattenArray(arr) {
  var result = [];

  function flatten(input) {
    for (var i = 0; i < input.length; i++) {
      if (Array.isArray(input[i])) {
        flatten(input[i]);
      } else {
        result[result.length] = input[i];
      }
    }
  }

  flatten(arr);
  return result;
}

var arr = [1, [2, [3, 4], 5], 6];
var ans = flattenArray(arr);
console.log(ans);
