let score = "33"
console.log(typeof score)
let v = Number(score)
console.log(typeof v)
// convert string to number using Number()
let a= "45adc"
let d= Number(a)
console.log(d)
// if string has characters other than numbers it will return NaN
// NaN- Not a number
let k=null
let b= Number(a)
console.log(b)
// null is converted to 0
let isloggedin = true
let c= Number(isloggedin)
console.log(c)
// true is converted to 1 and false to 0
//operations
let n= "5"
let m= -n
console.log(m)
console.log("1"+2+2)
console.log(1+2+"2")
console.log(+true)
//unary plus operator to convert boolean to number