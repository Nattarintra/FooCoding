// 1.1-1.3 Array

const harryPotterBooks = ["Harry Potter and the You’re A Wizard, Harry", "Harry Potter and the secret broom cupboard", "Harry Potter and the We Have a Justice System?", "Harry Potter and the Make Sure You Read This One It’s Really Good", "Harry Potter and the We Need To Put a Conspicuously Blue Cover on this Book", "Harry Potter and the there are actually no wizarding princes so what’s this book about", "Harry Potter and the wait what are hallows"]

//console.log(harryPotterBooks)

const addBook = () => {
  const title = document.createElement("p")
  title.innerHTML = "<h1>" + "This is Array section " + "</h1>"
  const ul = document.createElement("ul") // create <ul>
  document.getElementById("root").appendChild(title) // add <h1> into #root
  document.getElementById("root").appendChild(ul) // add <ul> into #root

  // Render Books
  const renderBooksList = (item, index) => {
    const li = document.createElement("li") //create <li>
    //console.log(index)
    li.setAttribute("id", index, "class", "item") // set id"indexnum" calss"item"
    ul.appendChild(li) // add <li> into <ul>
    li.innerHTML += item
  }
  // loop
  harryPotterBooks.forEach(renderBooksList)
}
addBook()

// 1.4 - Object

const objBooks = {
  sophies_world: {
    title: "Sophie's World",
    author: "Jostein Gaarder",
    language: "En"
  },
  haxan: {
    title: "Häxan",
    author: "Camilla Läckberg",
    language: "Sw"
  },
  Inferno: {
    title: "Inferno",
    author: "Daniel Browne, Dan Brown",
    language: "Sw"
  },
  harry_potter: {
    // title: "Harry Potter and the You’re A Wizard, Harry",
    title: harryPotterBooks,
    author: "J. K. Rowling",
    language: "En"
  }
}
