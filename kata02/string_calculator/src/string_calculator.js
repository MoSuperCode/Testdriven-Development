// StringCalculator.js
function electroAroundTheWorld(inputArray) {
  this.inputArray = inputArray;
}
electroAroundTheWorld.prototype.add = function (inputArray) {
  return inputArray.length + 1;
};
