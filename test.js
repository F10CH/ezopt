var O = require('ezopt')

// by making a new object
var opt = O.getOpt(process.argv, 2)
console.log("tested params",Array.from(opt.it()))
console.log("opt.test('-a') = ",opt.test('-a'))

<<<<<<< HEAD
// ... or directly
O.test('--param',(e,i,p)=>{ console.log('parameters for --param at index',i,':', p) },2)
=======
O.test('--param',(e,i,p)=>{ console.log('parameters for --param at',i,':', p) },2)
>>>>>>> 716f30b96b28bb8f1667c4c60f3c9c514d6bbbea
