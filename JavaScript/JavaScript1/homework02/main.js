// 1 Hello World

console.log("Hello world  ")

//2. fixing I'm awesome issue:
console.log(`I'm awesome`)

// 3 Declare x
let x
console.log("the value of my variable x will be: undefined?...  ")
console.log("x is =  " + x)

let x = 9
console.log("the value of my variable x will be: 9 integer  ")

console.log("x value is =  " + x)

// 4 Declare y
let y

console.log("the value of my variable y will be: undefined?...  ")
console.log("y is =  " + y)

let y = 88
console.log("the value of my variable y will be: 88 integer  ")
console.log("y value is =  " + y)

// 5 round number

// Declare z and assign it to 7.25
const z = 7.25
const a = z
console.log("z is =  " + z)
console.log("a is round number of z and. a is =  " + Math.round(a))

const newAValue = Math.round(a)
if (z > newAValue) {
  console.log(`Hello I'm variable z. And I am greater than a. ${z}`)
}

//6 Arrays

// Declare arrays
const myLunchBoxes = []
// log what do you think  myLunchBoxes gonna be
console.log("My lunch boxes is emtpy ")
// Log my myLunchBoxes result
console.log(myLunchBoxes)

// Declare arrays
const myFavAnimals = ["Dog", "Cat", "Bird"]
console.log(myFavAnimals)

// Add new pets to myFavoritePets
myFavAnimals.push("baby pig")
console.log(myFavAnimals)

// 7. More strings

let myString = "this is a test"
// Add the string to your file and console.log it.
console.log(myString + " from Natta")
// string Length
console.log("num of string length " + myString.length)

// 8 check typeof

const myNumber = 9
console.log("typeof number ")
console.log(typeof myNumber)

const nattaString = "Doing Homework"
console.log("typeof String ")
console.log(typeof myString)

const isHomeworkProgress = true
console.log("typeof Boolean true || fale")
console.log(typeof isHomeworkProgress)

const lunchBoxes = ["Kebab", "Burger", "Noodles"]
console.log("typeof Object")
console.log(typeof lunchBoxes)

// 9  x = x % 3 left over number

const numX = 7
const numY = numX % 3
console.log("should be 1 ")
console.log("% will display the number left over after /  ")
console.log("Prove my resullt " + numY)

// 10 yessss You are almost done
//  Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

// Yes
const myFavaritesFood = ["sushi", 105, "Yakiniku", 114, "Noodles Soup", 99]

// Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?

// Good question I have no idear but let me try it out.
const compareNum1 = 6 / 0
const compareNum2 = 10 / 0
const result = compareNum1 === compareNum2
console.log("I have no idea...." + result)
