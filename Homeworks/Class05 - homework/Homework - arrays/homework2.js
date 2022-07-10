
function sumArray(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

let numbers = [1, 2, 3, 4, 5];

let result = sumArray(numbers)
alert(result)
console.log(result)



console.log("======== BONUS ========")

let validateArray = [1, 2, 3, "Marija", 4, NaN]

function validateNumber(validateArray) {
    for(let isNum of validateArray) {
        if (Number(isNum)) {
            console.log(isNum)
            continue;
        } else {
            console.log("ERROR");
            continue;
        }       
    }         
}

let result2 = validateNumber(validateArray)

