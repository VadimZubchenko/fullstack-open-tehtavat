// Importing necessary modules for testing
const { test, describe } = require('node:test') // `test` for individual tests, `describe` for grouping related tests
const assert = require('node:assert') // Used for making assertions in tests

// Importing the `average` function to be tested
const average = require('../utils/for_testing').average

// Grouping all tests related to the `average` function
describe('average', () => {
  // Test case: When the input array has a single value
  test('of one value is the value itself', () => {
    // Asserting that the average of a single-element array equals the value itself
    assert.strictEqual(average([1]), 1)
  })

  // Test case: When the input array has multiple values
  test('of many is calculated right', () => {
    // Asserting that the average of an array with multiple values is calculated correctly
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  // Test case: When the input array is empty
  test('of empty array is zero', () => {
    // Asserting that the average of an empty array is 0
    assert.strictEqual(average([]), 0)
  })
})
