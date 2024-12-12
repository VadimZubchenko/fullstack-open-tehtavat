// Function to reverse a string
const reverse = (string) => {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  return string.split('').reverse().join('')
}

// Function to calculate the average of an array of numbers
const average = (array) => {
  // Reducer function to calculate the sum of array elements
  const reducer = (sum, item) => {
    return sum + item
  }

  // If the array is empty, return 0 to avoid division by zero
  // Otherwise, calculate the average by summing all elements and dividing by the array's length
  return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length
}

// Exporting the functions so they can be used in other modules
module.exports = {
  reverse,
  average,
}
