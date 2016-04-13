Easy command line parser for nodejs
-----------------------------------

var ez = require('ezopt')

// ez.test(<option>,[callback],[num_arguments_after_option])
// if callback omitted just return true or false

ez.test([-p,--parameter], (e,i,p)=>{ console.log('option %s, index: %d, argument:%s',e,i,p) }, 1)

// test with npm :

npm test ezopt