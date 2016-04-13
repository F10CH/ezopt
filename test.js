var O = require('ezopt')

var opt = O.getOpt(process.argv, 2)
console.log("tested params",Array.from(opt.it()))
console.log("opt.test('-a') = ",opt.test('-a'))

O.test('--param',(e,i,p)=>{ console.log('parameters for --param at',i,':', p) },2)
