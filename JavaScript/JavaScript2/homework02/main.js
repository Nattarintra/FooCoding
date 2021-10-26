const myNumbers = [1, 2, 3, 4]
const doubleOddNumbers = myNumbers.map(num => {
  if (num % 2 !== 0) {
    console.log("Select num that myNumbers can / two and then * it by two  ", num * 2)
  }
})

const filterDubleOddNums = myNumbers.filter(num => {
  if (num % 2 !== 0) {
    console.log("Select num that myNumbers can / two and then * it by two  ", num * 2)
  }
})

const title = document.createElement("h1")
title.innerText = "JavaScript Homework week 2 "
document.querySelector("#root").appendChild(title)
