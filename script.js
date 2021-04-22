console.log("----------------------------");

// Function declaration:
function squaredNumbersDeclararion(number1, number2) {
    sum = number1*number1 + number2*number2;
    squaredSum = sum * sum;
    return squaredSum;
}
console.log(squaredNumbersDeclararion(2, 3));

// Function expression:
const squaredNumbersExpression = function(number1, number2) {
    sum = number1*number1 + number2*number2;
    squaredSum = sum * sum;
    return squaredSum;
}
console.log(squaredNumbersExpression(2, 3));

// arrow expression:
const squaredNumbersArrow = (number1, number2) => {
    sum = number1*number1 + number2*number2;
    squaredSum = sum * sum;
    return squaredSum;
}
console.log(squaredNumbersArrow(2, 3));





/*
// TUTORIAL
// !!GEBRUIK EXPRESSIONS OF DECLARATIONS. NIET DOOR ELKAAR = best practice. BIJ VOORKEUR EXPRESSIONS.

// function declaration -- de oiginele manier van schrijven. beetje verouderd.
function sayHello1() {
    console.log("Hello 1");
};
sayHello1();

// Function expression -- DEZE GEBRUIKEN. Kwam een paar jaar geleden. is beter/moderner.  
const sayHello2 = function(){ //expression is alles wat na = komt. 
    console.log("Hello 2");
} // geen ; achter de laatste bracket }. 

sayHello2();

// Arrow function (also a function expression) nu nog niet gebruiken. Heeft soms meerwaarde. 
const sayHello3 = () => {
    console.log("hello 3");
};
sayHello3();
*/





/* VORIGE OPDRACHT!

// Checking if a number is big:
const compairNumbers = function(number) { // this is a function that produces something. It does not use console.log
    if (number > 100){
        return true;
    } else {
        return false;
    }
};

console.log(compairNumbers(150));
console.log(compairNumbers(50));
console.log(compairNumbers(0));
console.log(compairNumbers(999));

/* 
// ALTERNATIEF: Because number < 100 already returns true or false we can immediately return that too to make the function shorter:

const numberIsBig = function(number) {
    return number > 100;
};
*/

/*
// Bouncer at a club
const bouncerSais = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    } if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(bouncerSais(2000, 0, 15));
console.log(bouncerSais(2000, 1999, 50));
console.log(bouncerSais(2000, 2000, 40));
console.log(bouncerSais(2000, 2999, 30));

/* Alternative solutions
// It's possible to skip the curly braces for an if statement if you only want one statement to be run after the if. Be careful with this as it can make your code less readable.

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) return "this is a club for adults";
    if (currentVisitors >= maxVisitors)
        return "it's too busy now, come back later";
    return "come in";
};

// We can also use a temporary response variable, put a value into it and then return that variable at the end of the function. This can sometimes be a better pattern.
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};
*/


/* MIJN EIGEN OPLOSSING voor het nakijken: 
const bouncerBrenda = function(age, current, max){
    if (age < 21){
        return "this is a club for adults";
    }
    if (current < max){
        return "come in";
    }
    if (current > max){
        return "it's too busy now, com back later";
    }
    
};

const ageVisitor = 19;
const currentVisitors = 200;
const maxVisitors = 300;
const brendaSais = bouncerBrenda(ageVisitor, currentVisitors, maxVisitors);
console.log(brendaSais);
*/
/*
// calculating the average
const calculateAverage = function(number1,number2,number3,number4,number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};

console.log(calculateAverage(1, 5, 23, 4, 5)); 
console.log(calculateAverage(1, 2, 3, 4, 5)); 
console.log(calculateAverage(-10000, 0, 0, 0, 5000)); 

/*
// ALTERNATIEF UIT TUTORIAL met eigen aanpassingen:
const calculateAverage = function(numbers){
    const average = numbers.reduce((total, n) => total + n) / numbers.length;  
    return average;
};

const grades = [6,7,8,9,9];
const averageGrades = calculateAverage(grades);
console.log(Math.round(averageGrades));

const ages = [2,4,7,13,22];
const averageAge = calculateAverage(ages);
console.log(Math.round(averageAge));

const seconds = [55,34,48,33,40];
const averageSeconds = calculateAverage(seconds);
console.log(Math.round(averageSeconds));
*/










// UIT VORIGE OPDRACHT
/*
const paintWall = function(Location, Color){ // de volgorde hiervan is belangrijk, anders draait hij het om. 
    console.log("The " + Location + "-wall has been painted " + Color)
};

paintWall("livingroom", "green"); */

/* of zo geschreven:
const wall = "kitchen";
const color = "red";
paintWall(wall, color); 


bij alleen 1 argument:
paintWall("red"); of
paintWall("green"); */



/* TUTORIAL NOTITIES:

// VOORBEELD FUNCTION ARGUMENT STRING:
const heat = function(item) {
    console.log("I'm heating " + item);
    // lot of code
    // lot of code
    // lot of code 
    console.log("Ping! Your " + item + " is heated.")
};

const main_course = "pasta";
const dessert = "cake"

heat("popcorn"); // passing an argument to a funciton 
heat("milk");
heat (main_course); // je kunt dus ipv een string ook een variable naar de function sturen. 
heat (dessert);

// VOORBEELD FUNCTION ARGUMENT NUMBER:
const multiply = function(numberA, numberB) { // voorbeeld multiple arguments
    console.log(numberA * numberB);
};

multiply (3, 4); // voorbeeld multiple arguments 

const age = 5;
const dogYearsFactor = 7;
multiply(age, dogYearsFactor);

// VOORBEELD ARRAY IN EEN FUNCTION:

// calculate average
const calculateAverage = function(numbers) { // tussen de haakjes zet je numbers ipv grades omdat je die functie misschien ook voor andere dingen dan grades gebruikt. 
    const average = numbers.reduce((total, n) => total + n) / numbers.length; // advanced code. Hoef ik nog niet te weten. 
    console.log(average);

};

const grades = [6,7,8,9,5,6,7,8,];
calculateAverage(grades);

*/