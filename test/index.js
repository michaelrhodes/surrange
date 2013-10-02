var run = require('tape').test
var surrange = require('../')

run('Even surround values work nicely', function(test) {
  var expected = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var result = surrange(15, 10)
  
  test.deepEqual(result, expected)
  test.end()
})

run('Negative numbers work as expected', function(test) {
  var expected = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
  var result = surrange(-1, 10)
  
  test.deepEqual(result, expected)
  test.end()
})

run('Odd surround values get weighted to the right', function(test) {
  var expected = [12, 13, 14, 15, 16, 17, 18, 19]
  var result = surrange(15, 7)
  
  test.deepEqual(result, expected)
  test.end()
})

run('Positive flag makes no difference if low bound > 0', function(test) {
  var expected = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var result = surrange(15, 10, true)
    
  test.deepEqual(result, expected)
  test.end()
})

run('Positive flag pushes negative numbers up from 1', function(test) {
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  var result = surrange(-1, 10, true)

  test.deepEqual(result, expected, 'with negative number')
 
  expected = [1, 2, 3, 4, 5, 6, 7, 8]
  result = surrange(4, 7, true)
  
  test.deepEqual(result, expected, 'with negative low bound')

  test.end()
})
