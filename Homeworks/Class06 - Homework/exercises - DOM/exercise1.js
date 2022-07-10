
let firstDiv = document.getElementById("first")
console.log(firstDiv)

let allParagraphs = document.getElementsByTagName("p")
console.log(allParagraphs)

let lastDiv = firstDiv.nextElementSibling.nextElementSibling;
console.log(lastDiv)

let lastDivHeader3 = lastDiv.lastElementChild;
console.log(lastDivHeader3)

let lastDivHeader1 = lastDiv.firstElementChild;
console.log(lastDivHeader1)

let text1p2Div = allParagraphs[1].innerText;
console.log(text1p2Div)

let text2div = document.getElementsByClassName("anotherDiv")[0].lastElementChild;
console.log(text2div)

text2div.innerText += " text"

lastDivHeader1.innerText = "Text Change"
lastDivHeader3.innerText = "Also text Change"
