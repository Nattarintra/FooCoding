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

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180
  },
  {
    name: "Some web development",
    duration: 120
  },
  {
    name: "Fix homework for class10",
    duration: 20
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0
  }
]

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 1.0
  },
  {
    name: "Some more web development",
    duration: 180
  },
  {
    name: "Staring out the window",
    duration: 10
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0
  },
  {
    name: "Look at application assignments new students",
    duration: 40
  }
]

const mySchedule = monday.concat(tuesday)
const hourlyRate = 20
//console.log(mySchedule)

const myWork = mySchedule

  .filter(work => work.duration > 119)
  .map(work => work.duration / 60)
  .reduce((acc, value) => "€" + (acc + value) * hourlyRate)

console.log(myWork)
