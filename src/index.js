
exports.min = function min (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    array.sort(function(a, b) {return a - b});
    return array[0];
  }
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    array.sort(function(a, b) {return b - a;});
    return array[0];
  }
}

exports.avg = function avg (array) {
  var sum = 0;
  if (!array || array.length == 0) {
    return 0;
  } else {
    for (var i=0; i<array.length; i++) {
      sum = sum + array[i];
    }
    return sum/array.length;
  }  
}
