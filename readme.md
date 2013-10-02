# surrange
surrange is a simple utility for generating ranges that surround a given number.

[![Build status](https://travis-ci.org/michaelrhodes/surrange.png?branch=master)](https://travis-ci.org/michaelrhodes/surrange)

[![Browser support](https://ci.testling.com/michaelrhodes/surrange.png)](https://ci.testling.com/michaelrhodes/surrange)

## Install
```
npm install surrange
```

## API
``` 
surrange(

  number (int):
    any integer, positive or negative.

  surround (int):
    the number of surrounding values that should
    be included in the output. odd values will be
    weighted to the right.

  positive (bool):
    whether the output should consist of only
    positive integers (1, 2, 3, etc).

)
```

### Example
``` js
var surrange = require('surrange')

surrange(10, 5)
// => [8, 9, 10, 11, 12, 13]

surrange(-1, 10)
// => [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]

surrange(-1, 10, true)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### License
[MIT](http://opensource.org/licenses/MIT)
