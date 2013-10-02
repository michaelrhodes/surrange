module.exports = function(number, surround, options) {
  var output = []
  var middle = Math.floor(surround / 2)
  var low = number - middle
  var high = number + middle
  
  var hasOptions = options && /Object/.test(options.constructor)
  
  // Balance out odd surround values 
  if (surround % 2 !== 0) {
    if (hasOptions && Number(options.weight) < 0) {
     low--
    }
    else {
      high++
    }
  }

  // Adhere to minimum and maximum values
  if (hasOptions) {
    var minimum = (options.hasOwnProperty('minimum') ?
      options.minimum :
      null
    )
    var maximum = (options.hasOwnProperty('maximum') ?
      options.maximum :
      null
    )

    var hasMinimum = minimum !== null
    var hasMaximum = maximum !== null

    if (hasMinimum || hasMaximum) {
      var offset = 0

      // Adjust offset
      if (hasMinimum && low < minimum) {
        offset += Math.abs(minimum - low)
      }
      if (hasMaximum && high > maximum) { 
        offset -= Math.abs(maximum - high) 
      }
      
      // Set new range boundaries
      low += offset
      high += offset

      // Clip range boundaries if need be 
      if (hasMinimum && low < minimum) {
        low = minimum
      }
      if (hasMaximum && high > maximum) { 
        high = maximum
      }
    }
  }

  // Generate output 
  while (low <= high) {
    output.push(low++)
  }

  return output
}
