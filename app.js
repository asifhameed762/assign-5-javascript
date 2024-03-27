// Q1.
let cityName = prompt("Enter Your City Name");
if(cityName == "karachi"){

   console.log("Q1. Welcome to city of lights");

}

else{

    console.log("Q1. Allah Hafiz");

}
// Q2.

let Gender = prompt("Enter Your Gender");
if(Gender === "male"){
    console.log("Q2. Good Morning Sir");
}
else if (Gender === "female") { 
    console.log("Q2. Good Morning Ma'am");
}
else{
    console.log("Not Found");
}

// Q3.

let sig_color = prompt("Enter Color of traffic signal : ");
let red = "Must Stop";
let yellow = "Ready to move";
let green = "Move Now";

if(sig_color === "red"){
    document.write("Q3. <br>");
    document.write("<table border='1'>");
    document.write("<tr><th>Signal Color</th><th>Message</th>");
    document.write("<tr><td>"+ " Red " + "</td><td>" + red + "</td></tr>");
    document.write("</table>");
}
else if(sig_color === "yellow"){
    document.write("Q3. <br>");
    document.write("<table border='1'>");
    document.write("<tr><th>Signal Color</th><th>Message</th>");
    document.write("<tr><td>"+ " Yellow " + "</td><td>" + yellow + "</td></tr>" );
    document.write("</table>");
}
else if (sig_color === "green"){
    document.write("Q3. <br>");
    document.write("<table border='1'>");
    document.write("<tr><th>Signal Color</th><th>Message</th>");
    document.write("<tr><td>" + " Green" + "</td><td>" + green + "</td></tr>" );
    document.write("</table>");
}
else{
    document.write("Q3. <br>");
    document.write("<h3>Not Found</h3>");
}

// Q4

let rem_fuel = +prompt("Enter remaining fuel ;");

if(rem_fuel < 0.25){
    document.write("<br> Q4. <br>");
    document.write("Please Refill the fuel in your car");
}
else{
    document.write("<br> Q4. <br>");
    document.write("you have enough fuel in your car");

}

// Q5
// a
var a = 4;
if(++a === 5){
    alert("A." + "given condition for variable a is true");    
}

// b
var b = 82;
if(b++ === 83){
    alert("B." + "  given condition for variable b is true");
}
else{
    alert("B." + " given condition for variable b is false");
}
// c
var c = 12;
if(c++ === 13){
    alert("C." + " condition 1 is true");
}
else if(c === 13){
    alert("C." + "  condition 2  is true");
}
else if(++c < 13){
    alert("C." + "  condition 3  is true");
}
else if(c === 14){
    alert("C." + "  condition 4  is true");
}

// d
var materialCost = 20000;
var laborCost  = 2000;
var totalCost = materialCost + laborCost ;

if(totalCost === + materialCost){
    alert("D. " + " the cost is equals");
}
else{
    alert("D. " + " this is not equal");
}

// e
if(true){
    alert("E. " +  " TRUE");
}
else{
    alert("E. " +  " not found");
}

if(false){
    alert("E. " +  " FALSE");
}
else{
    alert("not found this is false");
}

// F
if("car" < "cat"){
    alert("car is smaller than cat");
}


// Q6.
document.write("<h1>Q6. Marks Sheet</h1>");
let totalMarks = 1100;
let subject1 = +prompt("Enter Obtained Marks",250);
let subject2 = +prompt("Enter Obtained Marks",350);
let subject3 = +prompt("Enter Obtained Marks",150);

let total_obtain_marks = subject1 + subject2 + subject3 ;
let percentage = total_obtain_marks / totalMarks * 100 ;


let grade;
let remarks
if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(percentage >= 70){
    grade = "A";
    remarks = "Good";

}
else if(percentage >= 60){
    grade = "B";
    remarks = "You Need To Improve";

}
else{
    grade = "F";
    remarks = "Sorry";

}


document.write("Total Marks : " + totalMarks + "<br><br>");
document.write("Marks Obtained : " + total_obtain_marks + "<br><br>");
document.write("Percentage : " + percentage.toFixed(2) + " % <br><br>");
document.write("Grade : " + grade + "<br><br>");
document.write("Remarks : " + remarks + "<br><br>");

// Q7 .
var secret_number = 5 ;
var guess_number = +prompt("Enter Guess number");

if(guess_number === secret_number){
    document.write("<h3>Q7.  Guess game</h3>");
    document.write("a. Bingo ! Correct Answer");
}
else if(guess_number === secret_number + 1){
    document.write("<h3>Q7.  Guess game</h3>");
    document.write("b. Close enough to the correct answer");
}
else{
    document.write("<h3>Q7.  Guess game</h3>");
    document.write("Incorrect guess <br><br>");
}

// Q8.

var number = +prompt("enter your number");
if(number / 3 === 0){
    document.write("Q8. <br>");
    document.write("The number is divisible by 3 <br><br>");
}
else{
    document.write("Q8 . <br>");
    document.write("The number is not divisible by 3 <br><br>");

}

// Q9 .
var number = +prompt("enter your number");
if (number % 2 === 0){
    document.write("Q9 . <br>");
    document.write(number + " is even number <br><br>");
}
else{
    document.write("Q9 . <br>");
    document.write(number + " is odd number <br><br>");
}

// Q10.
let temp = +prompt("Enter the temprature");

if(temp > 40){
    document.write("Q10 . <br> a. It is too hot outside.");
}
else if(temp > 30){
    document.write("Q10 . <br> b.The weather today is normal");
}
else if(temp > 20){
    document.write("Q10 . <br> c. Today's weather is cool");
}
else{
    document.write("Q10 . <br> d. OMG! Today’s weather is so Cool.");
}
// Q11.
document.write("<h1>Q11 . Calculator</h1>");

let firstNumber = +prompt("Enter First Number");
let operator = prompt("Enter + , - , / , * ,%");
let secondNumber = +prompt("Enter Second Number");

let result;
if(operator == '+'){
    result = firstNumber + secondNumber;
}
else if(operator == '-'){
    result = firstNumber - secondNumber;
}
else if(operator ==  '*'){
    result = firstNumber * secondNumber;
}
else if(operator == '/'){
    result = firstNumber / secondNumber;
}
else if(operator == '%'){
    result = firstNumber % secondNumber;
}
else{
    result = "Nothing else";
}
document.write("Result is " , result);

