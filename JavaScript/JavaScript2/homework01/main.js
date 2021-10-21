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
    li.setAttribute("class", "item") // set id"indexnum" calss"item"
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
    language: "En",
    imageUrl: "https://s2.adlibris.com/images/3417528/sophies-world-a-novel-about-the-history-of-philosophy.jpg"
  },
  haxan: {
    title: "Häxan",
    author: "Camilla Läckberg",
    language: "Sw",
    imageUrl: "https://s2.adlibris.com/images/40675137/haxan.jpg"
  },
  Inferno: {
    title: "Inferno",
    author: "Daniel Browne, Dan Brown",
    language: "Sw",
    imageUrl: "https://s2.adlibris.com/images/11569373/inferno.jpg"
  },
  harry_potter: {
    title: "Harry Potter and the You’re A Wizard, Harry",
    author: "J. K. Rowling",
    language: "En",
    imageUrl: "https://s2.adlibris.com/images/4953801/a-wizard-of-earthsea-1.jpg"
  }
}

//console.log("obj ", objBooks.harry_potter.title)

const addImage = () => {
  const image = document.createElement("img")
  image.src = ""

  document.getElementById("image").appendChild(image)
}
// addImage()

const addObjBook = () => {
  const objDiv = document.createElement("div")
  const title = document.createElement("h2")
  title.innerHTML = "This is Object section "

  const image = document.createElement("img")
  const ol = document.createElement("ol")

  document.getElementById("root").appendChild(objDiv)
  objDiv.setAttribute("id", "my-books")
  document.getElementById("my-books").appendChild(title)
  document.getElementById("my-books").appendChild(ol)

  let index = 0

  for (const [key, value] of Object.entries(objBooks)) {
    const li = document.createElement("li")

    image.src = value.imageUrl
    //console.log(image.src)
    li.setAttribute("id", index++)
    li.setAttribute("class", "item")
    ol.appendChild(li)
    li.appendChild(image)
    li.innerHTML += key + "<br> "
    li.innerHTML += `Title: ${value.title} <br> Auther: ${value.author} <br> Language: ${value.language}`
  }
}
addObjBook()
