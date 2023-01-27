//Types of data- 1 Primitive datatupe(which can't be change eg:int,string,etc),2.Non-Primitive datatype(which can be changed eg:obj,arrays)

//Primitive datatypes

let word = 'JavaScript'

//Non-Primitive DataTypes

let num = [1, 2 ,3]

let userOne ={
    name:'alex',
    role:'worker',
    country:'england'
}

//Number

let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

//Math Object

const Pi = Math.PI

console.log(Math.round(Pi)) // output is 3


console.log(Math.floor(Pi)) //output 3 rounding down

console.log(Math.ceil(Pi)) //output rounding up 

console.log(Math.min(21,1)) // 1
,
console.log(Math.max(21,1)) //21

const randnum = Math.random() //for random no.

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
