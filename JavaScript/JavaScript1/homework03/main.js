//Homework week3
// 1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence"
console.log(myString)
// 1.2 check str length
console.log(myString.length)

// 1.3 remove , and replace with space
//replace(regexp, newSubstr)
let removeComma=  myString.replace(/,/g," ") // /g it does a global search and replace
console.log("Remove comma from myString " + removeComma)


// 2. Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"]

//2.1 Add 'turtle'
favoriteAnimals.push("turtle")
console.log(favoriteAnimals)

// 2.3Adding Jims Animal
// removei[0]
favoriteAnimals.shift()
console.log("Remove index 0 " + favoriteAnimals)

// 2.4 Adding 'meerkat' into i[0]
favoriteAnimals.unshift("meerkat")
console.log("Behinde the scene Unshift will loop through all the data and it will rearange index. So it will be index 0 " + favoriteAnimals)

//2.6 check Arrays length
console.log("The array has a length of: " + favoriteAnimals.length)
console.log(favoriteAnimals)

//2.7 Remove  'giraffe'
favoriteAnimals.splice(2, 1) // splice(index, qty)
console.log(favoriteAnimals)

// 2.10 checking index number
favoriteAnimals.indexOf("meerkat")

// 2.9 Remove arr without knowing index number
// Remove arr by value  alt 1 filter()
// using filter() will return all the vaules & then function have all the values except meerkat
let removeMeerkat = favoriteAnimals.filter(function (item) {
  return item !== "meerkat"
})
console.log(removeMeerkat)


// More JavaScript

// 1 Create a function that takes 3 arguments and returns the sum of the these arguments.
function sumNumber(num1,num2,num3){
  console.log(num1,num2,num3)
  const results = num1 + num2 + num3
  return  results
}

sumNumber(4,3,1)

// 2 Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar (color){
 const redCar = console.log(color)
  return redCar 
}
colorCar('a red car')

// 4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

const myVehicleType = {
 
  code:{
    1 :"car",
    2:"motorbike"
  }
  
}
// make new obj
const codeVehicleType = {...myVehicleType}
console.log(codeVehicleType)

// receives 2 prams
function vehicleType(color,code){
console.log(color, code)

results = ""
  return results += color + code
}
vehicleType("a blue ", codeVehicleType.code.[2])


// 5 Can you write the following without the if statement, but with just as a single line with console.log(...);?
const isNumEquaToThree = true
 isNumEquaToThree ? console.log("yes") : console.log("no") 

// 6 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color,age,code){
  console.log(color,age,code)
  return console.log(color + age + code)
}
vehicle('a blue ', useCar.age ,useCar.code[1])



// 6-9
const vehicles = ["motorbike", "caravan", "bike","super car"];

function vehicle(color, code, age) {
  console.log(color, code, age)
 
if(code !== 2 && age <= 5 )return console.log(`a ${color} used ${vehicles[code]}`);
  return console.log(`a ${color} new ${vehicles[code]}`)
}
vehicle("blue ", 1, 5); //a blue used car'
vehicle("green", 2, 1) //a green new bike


// 10 for loops
const advertisement = [
  {
  name: "Joe",
  joesVehicles: vehicles // extended
},

]
// chk if I got the result
//console.log(advertisement[0].joesVehicles[1])

function joeService(name, vehicles){
console.log(name, vehicles)
for( item of adJoesVehicles)return console.log(`Amazing ${name}'s Garage, we service cars,${adJoesVehicles}`)
}
// declared variables 
const userName = advertisement[0].name
const adJoesVehicles = advertisement[0].joesVehicles
// call function
joeService(userName, adJoesVehicles)


// Create an empty object.
const emptyObj = {
  
}

//Create an object that contains the teachers that you have had so far for the different modules.
const myTeachers = [
  {
 name : 'Sahin',
  subject:"JavaScript"
  
},
  
  {
 name : ['Claudio','Alex', 'Saif','Ildana'],
  subject:"HTML & CSS"
  
},
  
]
// 
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); // false, because each variable its own memory box
console.log(x === y); // false, false, because each variable its own memory box
console.log(z == y); // true,  it sharing the same memory box.

// 16 o2 changes o3 (or not)? and changing o1 changes o3(or not)?
let o1 = { foo: "bar" }; 
let o2 = { foo: "bar" };
let o3 = o2;

// changing o2 will also change o3, because is obj and its share the same memory.
// changing o1 will not affect o3 , it doesn't share the same memory.
//Does the order that you assign (o3 = o2 or o2 = o3) matter? yes 

let bar = 42; // it's typeof 'number'
typeof typeof bar;  //  when you chk typeof typeof it will chk from the previouse result typeof 'number' that why it turn to a string












