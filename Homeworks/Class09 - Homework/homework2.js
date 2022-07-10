
function Book(title, author, readingStatus) {
    this.bookTitle = title,
    this.bookAuthor = author,
    this.readingStatus = readingStatus,

    this.returnInfo = function () {
        if (readingStatus === true) {
            document.getElementById('result').innerText = `Already read '${this.bookTitle}' by ${this.bookAuthor}`
        } else if (readingStatus === false) {
            document.getElementById('result').innerText = `You still need to read '${this.bookTitle}' by ${this.bookAuthor}`
        }
    }
}

// needed Inputs for new book
let bookInput = document.getElementById('bookName')
let authorInput = document.getElementById('bookAuthor')
let isRead = document.getElementById('isRead')
let button = document.getElementById('addBook')
let readingStatus = false;

let valueIndex = 5;
let mainDiv =document.getElementById('main')

// inputs for books
let inputs = document.getElementsByName('book')
let inputsArray = Array.from(inputs)
console.log(inputsArray)

// Functions that returns is one book rad or not 
let checkBookStatus = function() {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].addEventListener('click', function (){
            books[i].returnInfo()
    })
    }  
}

checkBookStatus()

// array with defined books
let books = [ 
    new Book("The Alchemist", "Paulo Coelho", true), 
    new Book("The Four Agreements", "James Altucher", false), 
    new Book("Think and Grow Rich", "Napoleon Hill", true), 
    new Book("Hustle: The Power to Charge Your Life with Money, Meaning, and Momentum", "Neil Patel", true), 
    new Book("Tuesdays with Morrie", "Mitch Albom", false), 
    new Book("Man's Search for Meaning", "Victor E. Fankl", true) 
]

isRead.addEventListener('change', function() {
    if (isRead.value === 'false') {
        isRead.setAttribute('value', 'true')
        readingStatus = true;
    } else if (isRead.value === 'true') {
        isRead.setAttribute('value', 'false')
        readingStatus = false;
    }
})

button.addEventListener('click', function(){

    if (bookInput.value == "" || authorInput.value == "") {
        alert("Enter Book/Author names")
    } else if (parseInt(authorInput.value) == Number(authorInput.value)) {
        alert('Enter valid author name')
    } else {
    let addBook = new Book(bookInput.value, authorInput.value, readingStatus)
    books.push(addBook)
    console.log(books)
    valueIndex++

    let br = document.createElement('br')
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    
    newLabel.setAttribute('for', 'book')
    newLabel.innerText = ` "${bookInput.value}" by ${authorInput.value}`
   
    newInput.setAttribute('type', 'radio')
    newInput.setAttribute('name', 'book')
    newInput.setAttribute('value', Number(valueIndex))
   
    mainDiv.appendChild(br)
    mainDiv.appendChild(newInput)
    mainDiv.appendChild(newLabel)
    
    inputsArray.push(newInput)
    console.log(inputsArray)

    checkBookStatus()
    }
})



    
