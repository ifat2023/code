// Exs.1
function ex1() {
  let number = prompt("Please enter first number");
  let num = prompt("Please enter second number");

  if (number == num) {
    document.write("BOOM");
  } else {
    document.write("TRY AGAIN");
  }
}

// Exs.2

function ex2() {
  let x = prompt("Please enter first number");
  let y = prompt("Please enter second number");

  if (x + y == 10) {
    document.write("The sum of x and y is 10");
  } else {
    document.write("The sum isn't 10");
  }
}

// Exs.3

function ex3() {
  let a = prompt("Please enter first number");
  let b = prompt("Please enter second number");

  document.write("The result is: " + a * b);
}

// Exs.4

function ex4() {
  let c = prompt("Please enter first number");
  let d = prompt("Please enter second number");

  if (c > d) {
    document.write("The largest number is " + c);
    document.write(`The largest number is ${c}`);
  } else {
    document.write("The largest number is " + d);
  }
}

// Exs.5

function ex5() {
  const today = new Date();
  const day = today.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (day == 0) {
    document.write("good week");
  } else if (day == 1 || day == 2 || day == 3) {
    document.write("good day");
  } else {
    document.write("happy weekend!");
  }
}

// Exs.6

function ex6() {
  let user = prompt("Please enter your name");
  let password = prompt("Please enter your password");

  if (user == "admin" && password == "123") {
    document.write("You've logged in successfully");
  } else if (password.length < 6) {
    document.write("The password must contain at least 6 characters.");
  } else {
    document.write(
      "<h1 style='color:red'>Incorrect username and password</h1>"
    );
  }
}

//Exs.7

function ex7() {
  let length = prompt("please enter the length of the rectangle");
  let width = prompt("please enter the width of the rectangle");

  if (length == width) {
    document.write("The result is: " + length * width + "square ");
  } else {
    document.write("The result is: " + length * width);
  }
}

//Exs.8

function ex8() {
  let birthdate = prompt("please enter your year of birth");
  const age = 2022 - birthdate;
  document.write("your age is: " + age);
}

//Exs.9
function ex9() {
  let player = prompt("Please enter your name ");
  let score = prompt("please enter yore score");

  let player2 = prompt("Please enter your name ");
  let score2 = prompt("please enter yore score");

  if (Number(score) > Number(score2)) {
    document.write(player + " " + score);
  } else {
    document.write(player2 + " " + score2);
  }
}

//Exs.10
function ex10() {
  let num1 = Number(prompt("Please enter your number "));
  let num2 = Number(prompt("Please enter your number "));
  let num3 = Number(prompt("Please enter your number "));
  let num4 = Number(prompt("Please enter your number "));
  let num5 = Number(prompt("Please enter your number "));
  let num6 = Number(prompt("Please enter your number "));
  let num7 = Number(prompt("Please enter your number "));

  let sum = num1 + num2 + num3 + num4 + num5 + num6 + num7;
  average = sum / 7;

  document.write(average);
}

//Exs.11
function ex11() {
  let num = Number(prompt("Please enter number "));

  if (num % 2 == 0) {
    document.write("The number is even");
  } else {
    document.write("the number is odd");
  }
}

//Exs.12
function ex12() {
  let students = parseInt(prompt("Please enter the number of students"));

  let security = Math.floor(students / 30);

  if (students % 30 > 0) {
    security++;
  }

  document.write(" A number of security guards " + security);

  const first_Aid = Math.floor(students / 50);
  document.write(" number of medics " + first_Aid);

  const medic = Math.floor(students / 100);
  document.write(" number of medics " + medic);
}

//Exs.13
function ex13() {
  let min = prompt("please enter the minutes");
  const minNumber = Number(min);

  const result = getTime(minNumber);

  document.write(result);
}

function getTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

//Exs.14
function ex14() {
  let price = prompt("please enter the price of the car");
  let payments = prompt("please enter desired number of payments (till 24 )");

  if (payments > 24) {
    return document.write("u can take only till 24 payments ");
  }

  const priceAfterDiscount = Math.floor(price - price * 0.05);

  const total = Math.floor(priceAfterDiscount / payments);

  document.write(
    " The price of the car after the discount: " +
      priceAfterDiscount +
      " Number of payments: " +
      total
  );
}

//Exs.15
function ex15() {
  let funds = prompt("Please specify the number of funds in the train");
  let time = prompt(
    "Please specify the time of day ? morning, noon or evening"
  );
  let salary = prompt("The driver's salary");

  const price = 6.6;
  const traveling = Math.floor(120 * funds);
  const morning = Math.floor(price * traveling);
  const noon = Math.floor(price * (0.9 * traveling));
  const evening = Math.floor(price * (0.7 * traveling));

  const tax = 0.17;
  let total = 0;

  if (time == "morning") {
    total = morning - tax * morning - salary;
  } else if (time == "noon") {
    total = noon - tax * noon - salary;
  } else if (time == "evening") {
    total = evening - tax * evening - salary;
  }

  document.write(
    " Net profit from operating the train line in the morning " + total
  );
}

function star() {
  let n = prompt("Please enter your number ");

  for (let i = 0; i < n; i++) {
    document.write("*");
  }
}

function assembly() {
  let n = Number(prompt("Please enter your number "));
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  document.write(n + "! = " + total);
}

//Exs. second home-work 1-12

//Exs.1

function ex101() {
  let y = Number(prompt("Please enter first number "));
  let z = Number(prompt("Please enter second number"));

  if (y > z) {
    document.write("The larger number is " + y);
  } else {
    document.write("The larger number is " + z);
  }
}

//Exs.2
function ex102() {
  let e = Number(prompt("enter e"));
  let f = Number(prompt("enter f"));
  let g = Number(prompt("enter g"));

  let counter = 0;

  if (e < 0) {
    counter++;
  }
  if (f < 0) {
    counter++;
  }
  if (g < 0) {
    counter++;
  }

  if (counter % 2 == 0) {
    document.write("The sign is  + ");
  } else {
    document.write("The sign is - ");
  }
}

//Exs.3

function ex103() {
  let h = 0
  let i = -1
  let j = 4

  if (j > h && j > i) {
    document.write(j + "," + h + "," + i);
  } else document.write(h + "," + i + "," + j);
}

//Exs.4

function ex104() {
  let num1 = Number(prompt("Please enter first number"));
  let num2 = Number(prompt("Please enter second number"));
  let num3 = Number(prompt("Please enter Third number"));
  let num4 = Number(prompt("Please enter Fourth number"));
  let num5 = Number(prompt("Please enter Fifth number"));

  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    document.write("The larger number is " + num1);
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    document.write("The larger number is " + num2);
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5)
    document.write("The larger number is " + num3);
  else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5)
    document.write("The larger number is " + num4);
  else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4)
    document.write("The larger number is " + num5);
}

//Exs.5

function ex105() {
  let n = 15
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      document.write(i + "  is even " + "</br>");
    } else {
      document.write(i + "  is odd " + "</br>");
    }
  }
}

//Exs.6

function ex106() {
  let David = 80;
  let vinoth = 77;
  let Divya = 88;
  let Lshitha = 95;
  let Thomas = 68;

  let sum = David + vinoth + Divya + Lshitha + Thomas;
  average = sum / 5;

  if (average < 60) {
    document.write(" The average is " + average + ", grade F");
  } else if (average < 70) {
    document.write(" The average is " + average + ", grade D");
  } else if (average < 80) {
    document.write(" The average is " + average + ", grade C");
  } else if (average < 90) {
    document.write(" The average is " + average + ", grade B");
  } else if (average < 100) {
    document.write(" The average is " + average + ", grade A");
  }
}

//Exs.7

function ex107() {
  let n = 100;

  for (let i = 1; i <= n; i++)
  {
    if (i % 3 === 0 && i % 5 === 0) {
      document.writeln(i + " FizzBuzz " + "</br>" );
    } else if (i % 3 === 0) {
      document.writeln(i + " Fizz " + "</br>" );
    } else if (i % 5 === 0 ) {
      document.writeln(i + " Buzz " + "</br>" );
    } else {
      document.writeln(i + "</br>");
    }
  }
}

//Exs.10
function ex110() {

for (let i = 1; i <6; i++) {
  for (let j = 0; j <i; j++) {
    document.write("* ");
  }
  document.write("<br/>");

}
}

//Exs.11

function ex111() {
  let num1 = Number(prompt("Please enter first number"));
  let num2 = Number(prompt("Please enter second number"));

  let gcd = getGcd(num1, num2);
  document.write(gcd);
}

function getGcd(num1,num2){
  let lowest = 0;
  if (num1 < num2 )
{
  lowest = num1
}
else {
  lowest = num2
}
 for (let i = lowest; i > 0; i--) {
let result = isGcd(num1, num2, i);
if (result == true) {
return i;
 }
}

return 1;
}

function isGcd(num1, num2, value){
  if (num1 % value == 0 && num2 % value == 0 ) {
    return true;
  }
  else {
    return false;
  }


}

//Exs.12

function ex112() {


}