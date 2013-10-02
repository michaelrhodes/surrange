var run = require('tape').test
var surrange = require('../')

run('Negative numbers work as expected', function(test) {
  var result = surrange(-1, 10)
  var expected = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
  
  test.deepEqual(result, expected)
  test.end()
})

run('Even surround values are nicely centered', function(test) {
  var result = surrange(15, 10)
  var expected = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  
  test.deepEqual(result, expected)
  test.end()
})

run('Odd surround values get weighted to the right', function(test) {
  var result = surrange(15, 7)
  var expected = [12, 13, 14, 15, 16, 17, 18, 19]
  
  test.deepEqual(result, expected)
  test.end()
})

run('Weight option lets you weight to the left', function(test) {
  var result = surrange(15, 7, { weight: -1 })
  var expected = [11, 12, 13, 14, 15, 16, 17, 18]
  
  test.deepEqual(result, expected)
  test.end()
})

run('Minimum option pushes negative numbers forward', function(test) {
  var result = surrange(-1, 10, { minimum: -1 })
  var expected = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  test.deepEqual(result, expected)
  test.end()
})

run('Maximum option pushes numbers backwards', function(test) {
  var result = surrange(-1, 10, { maximum: 2 })
  var expected = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2]

  test.deepEqual(result, expected)
  test.end()
})

run('Surround is dropped if bounds are too tight', function(test) {
  var result = surrange(5, 100, { minimum: 4, maximum: 6 })
  var expected = [4, 5, 6]
  
  test.deepEqual(result, expected)
  test.end()
})

run('ś̴͘u͟rran͡g͏͠e ca̵ņ̴̛n͝o͜t͠ ̵͟͠b͠e ̷̴͝t͏r̡įc̛k̵̵e̶̡d̡', function(test) {
  var result = surrange(0, 7, { minimum: 1, weight: -1e6 })
  var expected = [1, 2, 3, 4, 5, 6, 7, 8]
  
  test.deepEqual(result, expected)
  test.end()
})
