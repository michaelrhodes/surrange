var run = require('tape').test
var surrange = require('../')

run('Negative numbers work as expected', function(test) {
  var expected = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
  var result = surrange(-1, 10)
  
  test.deepEqual(result, expected)
  test.end()
})

run('Even surround values are nicely centered', function(test) {
  var expected = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var result = surrange(15, 10)
  
  test.deepEqual(result, expected)
  test.end()
})

run('Odd surround values get weighted to the right', function(test) {
  var expected = [12, 13, 14, 15, 16, 17, 18, 19]
  var result = surrange(15, 7)
  
  test.deepEqual(result, expected)
  test.end()
})

run('Weight option lets you weight to the left', function(test) {
  var expected = [11, 12, 13, 14, 15, 16, 17, 18]
  var result = surrange(15, 7, { weight: -1e6 })
  
  test.deepEqual(result, expected)
  test.end()
})

run('Minimum option pushes negative numbers forward', function(test) {
  var expected = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var result = surrange(-1, 10, { minimum: -1 })
  
  test.deepEqual(result, expected)
  test.end()
})

run('Maximum option pushes numbers backwards', function(test) {
  var expected = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2]
  var result = surrange(-1, 10, { maximum: 2 })

  test.deepEqual(result, expected)
  test.end()
})
