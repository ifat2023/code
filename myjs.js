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

function ex4() {
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

function ex11() {
  let num = Number(prompt("Please enter number "));

  if (num % 2 == 0) {
    document.write("The number is even");
  } else {
    document.write("the number is odd");
  }
}

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

function ex15() {
  let funds = prompt("Please specify the number of funds in the train");
  let time = prompt( "Please specify the time of day ? morning, noon or evening");
  let salary = prompt("The driver's salary");

  const price = 6.6;
  const traveling = Math.floor(120 * funds);
  const morning = Math.floor(price * traveling);
  const noon = Math.floor(price * (0.9 * traveling));
  const evening = Math.floor(price * (0.7 * traveling));

  const tax = 0.17;
  let total = 0;

  if (time == "morning") {
    total = (morning - ( tax  * morning)) - salary;
  } else if (time == "noon") {
    total = (noon - ( tax  * noon)) - salary;
  } else if (time == "evening") {
    total = (evening - ( tax  * evening)) - salary;
  }

  document.write(
    " Net profit from operating the train line in the morning " + total
  );
}