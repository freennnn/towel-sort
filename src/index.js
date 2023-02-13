
module.exports = function towelSort (matrix) {
  let resultArray = [];
  if (matrix != null && typeof matrix === "object") {
    for (let i=0; i< matrix.length; i++) {
      if (i % 2 === 0) {
        resultArray.push(...matrix[i]);
      } else {
        resultArray.push(...matrix[i].reverse());
      }
    }
  }

  return resultArray;
}
