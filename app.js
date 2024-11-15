function displayDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("dateTimeDisplay").innerText = `${date} ${time}`;
}

setInterval(displayDateTime, 1000);

displayDateTime();



// Task 2 14 Assignment 
function greetUser() {
   
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    
    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        document.getElementById("greeting").innerText = `Hello, ${fullName}! Welcome!`;
    } else {
        document.getElementById("greeting").innerText = "Please enter both your first and last name.";
    }
}

// Task 3 14 Assignment
function addNumbers() {
   
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById("result").innerText = `The sum is: ${sum}`;
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers.";
    }
}

// Task 4 14 Assignment
function performCalculation() {
    // Get input values and operator
    const value1 = parseFloat(document.getElementById("input1").value);
    const value2 = parseFloat(document.getElementById("input2").value);
    const chosenOperator = document.getElementById("operatorSelect").value;

    // Initialize result variable
    let calculationResult;

    // Perform calculation based on chosen operator
    if (!isNaN(value1) && !isNaN(value2)) {
        switch (chosenOperator) {
            case "+":
                calculationResult = value1 + value2;
                break;
            case "-":
                calculationResult = value1 - value2;
                break;
            case "*":
                calculationResult = value1 * value2;
                break;
            case "/":
                if (value2 !== 0) {
                    calculationResult = value1 / value2;
                } else {
                    calculationResult = "Error: Division by zero is not allowed.";
                }
                break;
            default:
                calculationResult = "Invalid operator.";
        }
        document.getElementById("displayResult").innerText = `The result is: ${calculationResult}`;
    } else {
        document.getElementById("displayResult").innerText = "Please enter valid numbers.";
    }
}

// Task 5 14 Assignment 

function squareNumber(number) {
    return number * number;
}

console.log(squareNumber(5));


// Task 14 14 Assignment 

function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
}


calcCircumference(5); 
calcArea(5); 



// Task 8 14 Assignment 

function calculateHypotenuse(base, perpendicular) {
    function square(number) {
        return number * number;
    }

    const hypotenuseSquared = square(base) + square(perpendicular);
    const hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}

const base = 3;
const perpendicular = 4;
console.log(`The hypotenuse is ${calculateHypotenuse(base, perpendicular)}`); 
