
let paragraph = document.getElementById("calc")

function weightInChickens(kilograms) {
    
    let chickenWeight = kilograms / 0.5;

    if (Number.isNaN(kilograms)) {
        paragraph.innerText += `Invalid input. Please refresh the page and enter valid number`
    } else {
        paragraph.innerText += `If you are ${input}kg, then your weight in chickens is: ${chickenWeight} chickens`
    }
}

let input = parseInt(prompt("Please enter your kilograms:"))

weightInChickens(input)

