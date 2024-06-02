// StringCalculator.js
function electroAroundTheWorld(inputArray) {
  this.inputArray = inputArray;
}
electroAroundTheWorld.prototype.add = function (inputArray) {
  if (inputArray.includes(6)) {
    return (inputArray = 2);
  } else {
    inputArray.length > 4
      ? (inputArray = inputArray.length + 1)
      : (inputArray = inputArray.length);
    return inputArray;
  }
};
