const books = ["Sophie's World", "Häxan", "Inferno", "Harry Potter and the You’re A Wizard, Harry"]

const myBooks = {
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
    title: "Harry Potter and the You’re A Wizard, Harry",
    author: "J. K. Rowling",
    language: "En"
  }
}

const bookCover = {
  sophies_world: "https://s2.adlibris.com/images/3417528/sophies-world-a-novel-about-the-history-of-philosophy.jpg",
  haxan: "https://s2.adlibris.com/images/40675137/haxan.jpg",
  Inferno: "https://s2.adlibris.com/images/11569373/inferno.jpg",
  harry_potter: "https://s2.adlibris.com/images/4953801/a-wizard-of-earthsea-1.jpg"
}

const title = document.createElement("h1")
title.innerText = "This is my favorite books "
document.querySelector("#root").appendChild(title)

const contentDiv = document.createElement("div")
contentDiv.classList.add("content-wrapper")
document.querySelector("#root").appendChild(contentDiv)

const getMyBooks = myBooks => {
  for (let book in myBooks) {
    const bookInfoDiv = document.createElement("div")
    bookInfoDiv.classList.add("book-card")
    document.querySelector(".content-wrapper").appendChild(bookInfoDiv)
    const bookTitle = document.createElement("h3")
    const author = document.createElement("p")
    const language = document.createElement("span")

    bookTitle.innerHTML = `${myBooks[book].title}`
    bookInfoDiv.appendChild(bookTitle)
    author.innerHTML = `Author: ${myBooks[book].author}`
    bookInfoDiv.appendChild(author)
    language.innerHTML = `Language: ${myBooks[book].language}`
    bookInfoDiv.appendChild(language)
  }
}
//getMyBooks(myBooks)

const getBookCover = images => {
  //console.log(images)

  getMyBooks(myBooks)

  const allBookCard = document.querySelectorAll(".book-card")
  //console.log(allBookCard)
  for (let i = 0; i < allBookCard.length; i++) {
    allBookCard[i].innerHTML += `<div class="book-cover"> <img src=${Object.values(images)[i]}> </div>`
  }
}
getBookCover(bookCover)
