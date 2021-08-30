// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let a = new Array(0);
  if (matrix.length === 0) {
    return [];
  }
  
  for (let index = 0; index < matrix.length; index++) {
    var element = new Array(0);
    if (index === 0 || index % 2 === 0) {
      element = matrix[index];
    } else {
      element = matrix[index].reverse();
    }
    a = a.concat(element);
  }
  return a.flat();
}

