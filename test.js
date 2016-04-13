var O = require('ezopt')

// by making a new object
var opt = O.getOpt(process.argv, 2)
console.log("tested params",Array.from(opt.it()))
console.log("opt.test('-a') = ",opt.test('-a'))

// ... or directly
O.test('--param',(e,i,p)=>{ console.log('parameters for --param at index',i,':', p) },2)

