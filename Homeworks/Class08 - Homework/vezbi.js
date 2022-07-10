// Task 1

let a;
a = 7;
let b = 8;
let c = a + b;
console.log(c)

// Task 2

let integer = 5;
let boolean = true;
let string = "Marija"
console.log(typeof(integer), typeof(boolean), typeof(string))

// Task 3

let x = 10;
let y = 3;
let division = x / y
let wholePart = Math.floor(division)
let remainder = x % y

// Task 4

let name;
name = "Marija"
let lastName = "Kolevska"
console.log(`HELLO ${name} ${lastName}`)

// Task 5

let num1 = 3;
let num2 = 4;

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// Task 6

let num3 = 102;
if (num3 >= 100) {
    console.log(`The number is cool`)
}

// Task 7

let denars = 120
let euro = denars / 61.5


// Task 8

let day;
day = "Friday";
switch(day) {
    case "Monday":
    case "Wednesday":
    case "Saturday":
        console.log(`i am in SEDC`)    
        break;
    case "Tuesday":
    case "Thursday":
    case "Friday":
    case "Sunday":
        console.log(`i am free`)
        break;
    default:
        console.log(`no such day`)
}

// Task 9

let numArr = [1, 2, 102, 108, 5, 6];
let strArr = ["Marija", "SEDC"];
console.log(numArr[0], strArr[0]);
console.log(numArr, strArr);
numArr[0] = 10;
strArr[0] = "Kiko";
numArr[99] = 20;
console.log(numArr)
numArr.push(5)
strArr.pop()

for (let num of numArr) {
    if (num >= 100)
    console.log("Its a cool number")
}

// Task 10

let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

// Task 11

for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}

// Task 12

let numArray = [1, 2, 3, 10, 5, -6, -2];
function sumOfArr(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i]
    }
    console.log(result) 
    return result
}
sumOfArr(numArray)

// Task 13

function positiveNumberSum(array) {
    let result = 0;
    for (let num of array) {
        if (num > 0) {
            result += num
        }
    }
    console.log(result)
    return result;
}
positiveNumberSum(numArray)

// Task 14

let randomArray = [1, 2, 3, "sedc", null]
function reversedArray (array) {
    let reversedArray = [];
    reversedArray = array.reverse()
    console.log(reversedArray)
    return reversedArray;
}
reversedArray(randomArray)

// Task 15

let averageArray = [2,4,6,8]
function averageValue (array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    let average = sum / array.length;
    console.log(average)
    return average
}
averageValue(averageArray)

// Task 16

function printName(name) {
    console.log(name)
}
printName("Marija")

// Task 17

function Hello(name) {
    console.log(`Hello ${name}`)
    return `Hello ${name}`
}
Hello("Marija")

// Task 18

function sumOfTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result)
    return(result)
}
sumOfTwoNumbers(2,3)

// Task 19

function oddOrEvenNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`)
        return `${number} is even.`
    } else {
        console.log(`${number} is odd.`)
        return `${number} is odd.`
    }
}
oddOrEvenNumber(2)
oddOrEvenNumber(3)

// Task 20

let numArr2 = [1,2,3,4,5,6,7,8,10]
function totalEvenNumbers(array) {
    let evenNumbersCounter = 0;
    for (let num of array) {
        if (num % 2 === 0){
            evenNumbersCounter += 1
        }
    }
    console.log(evenNumbersCounter)
    return evenNumbersCounter;
}

totalEvenNumbers(numArr2)

// Task 21

let h1Element = document.getElementById("task21-h1")
h1Element.innerText += "task21"

// Task 22

let paragraphs = document.getElementsByClassName("task22")
paragraphs[0].innerText += "task 22 paragraph 1"
paragraphs[1].innerText += "task 22 paragraph 2"

// Task 23

let firsth3Element = document.querySelector("h3");
firsth3Element.innerText += `task 23`
document.getElementsByTagName("h3")[0].innerText += `\ntask 23 first h3 second way`;

// Task 24

document.querySelector('div').lastElementChild.innerText += `task 24 last paragraph in the div`

// Task 25

document.getElementById('task25-h1').innerText = `changed text`

// Task 26

for (i = 0; i < 5; i++){
    let list = document.createElement('li')
    document.querySelector('ul').appendChild(list);
    list.innerText += `list item ${i + 1}`
}

