// Importing necessary modules for testing
const { test, describe } = require('node:test') // `test` for individual test cases, `describe` for grouping related tests
const assert = require('node:assert') // Used for making assertions in tests

// Importing the `reverse` function to be tested
const reverse = require('../utils/for_testing').reverse

// Grouping all tests related to the `reverse` function
describe('reverse', () => {
  // Test case: Reverse of a single-character string
  test('reverse of a', () => {
    const result = reverse('a') // Calling the `reverse` function with a single-character string

    // Assert that reversing 'a' results in 'a' (no change for single-character strings)
    assert.strictEqual(result, 'a')
  })

  // Test case: Reverse of a multi-character string
  test('reverse of react', () => {
    const result = reverse('react') // Calling the `reverse` function with 'react'

    // Assert that reversing 'react' results in 'tcaer'
    assert.strictEqual(result, 'tcaer')
  })

  // Test case: Reverse of a palindrome
  test('reverse of saippuakauppias', () => {
    const result = reverse('saippuakauppias') // Calling the `reverse` function with a palindrome

    // Assert that reversing a palindrome results in the same string
    assert.strictEqual(result, 'saippuakauppias')
  })
})
