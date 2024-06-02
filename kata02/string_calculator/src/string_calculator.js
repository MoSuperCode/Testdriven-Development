// StringCalculator.js
function electroAroundTheWorld(inputArray) {
  this.inputArray = inputArray;
}
electroAroundTheWorld.prototype.add = function (inputArray) {
  inputArray.length > 4
    ? (inputArray = inputArray.length + 1)
    : (inputArray = inputArray.length);
  return inputArray;
};
