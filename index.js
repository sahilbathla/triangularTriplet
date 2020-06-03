const hasNumbersOnly = (value) => Number.isInteger(value);

const hasTriangularTriplet = (array = []) => {
  // Throw errors for invalid input
  if (!array) throw 'Cannot be null'
  if (!Array.isArray(arr)) throw 'Invalid Input';
  if (array.length < 3) return 0;
  if(!array.every(hasNumbersOnly)) throw 'Array contains non-integer/null values'

  const sortedArray = array.sort((x, y)=> x - y);

  for (let i = 0; i < array.length - 2; i++) {
    if (sortedArray[i] >= 0 && sortedArray[i] > sortedArray[i + 2] - sortedArray[i + 1]) {
      return 1;
    }
  }
  return 0;
}

// Examples
const arr = [10,2,5,1,8,20];
const arr1 = [10,50,5,1];
console.log(hasTriangularTriplet([2,3,4,null]));
console.log(hasTriangularTriplet(null));
console.log(hasTriangularTriplet(arr));
console.log(hasTriangularTriplet(arr1));
