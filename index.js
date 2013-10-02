module.exports = function(number, surround, positive) {
  var output = []
  var middle = Math.floor(surround / 2)
  var low = number - middle
  var high = number + middle
  
  // Balance out odd surround values 
  if (surround % 2 !== 0) {
    high++
  }

  // Push negative numbers/zero into
  // the positive realm
  if (positive && low <= 0) {
    var offset = Math.abs(low)
    var extra = 1
    low += offset + extra 
    high += offset + extra
  }

  // Generate output 
  while (low <= high) {
    output.push(low++)
  }

  return output
}
