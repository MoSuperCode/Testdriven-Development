// StringCalculator.js
function electroAroundTheWorld(inputArray) {
  this.inputArray = inputArray;
}
electroAroundTheWorld.prototype.add = function (inputArray) {
  let number = 0;
  inputArray.forEach((arrayNum) => {
    if (arrayNum === 3) {
      number += 2;
    } else if (arrayNum === 5) {
      number += 4;
    }
  });
  return number;
};
