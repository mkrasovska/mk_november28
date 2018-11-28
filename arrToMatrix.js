var dimension = 3;
var myArr = makeRandomArr(dimension);
//var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArr);
console.log(arrToMatrix(myArr));

function arrToMatrix(arr) {
  var myMatrix = [];
  //  dimension = Math.sqrt(arr.length);

  for (var j = 1; j <= dimension; j++) {
    var rawArr = [];
    raw = j - 1;
    for (i = 0; i < dimension; i++) {
      rawArr[i] = arr[raw * dimension + i];
    }
    myMatrix[raw] = rawArr;
    j + 2;
  }
  return myMatrix;
}

function makeRandomArr(dimension) {
  var myArr = [];
  for (var k = 0; k < dimension * dimension; k++) {
    myArr[k] = +(Math.random() * 100).toFixed(1);
  }
  return myArr;
}
