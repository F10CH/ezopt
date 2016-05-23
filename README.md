#Easy command line parser for nodejs

```javascript
var ez = require('ezopt')

// ez.test(option,[callback],[num_arguments_after_option])
// if callback omitted just return true or false
// option can be String, Array[String], RegExp
// callback = function(option_string, index_integer, arguments_array){}

ez.test([-p,--parameter], (p,i,a)=>{ console.log('option %s, index: %d, argument:%s',p,i,a) }, 1)
```
## test with npm :

npm test ezopt
