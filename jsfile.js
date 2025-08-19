alert("This alert works from the jsfile");
console.log(3 + 2);
console.log("Welcome in my project");
khan = "Ahmad shah ali";
console.log(khan);
khan1 = 4 + 4;
khan2 = 3;
console.log(khan1);
console.log(khan2);
let khan3 = "Excited";
let khan4 = "Person";
let khan5 = khan3.concat(khan4);
console.log(khan5);
console.log(khan3);
console.log(
  "index of x is ",
  khan3.indexOf("x"),
  " and index of d is ",
  khan3.indexOf("d")
);
let z = (x = y = "Wali afridi");
console.log(z);
let wah = 22;
console.log("Your aga is ", wah, " years");
company = "space X";
const wah2 = 4 + 2;
console.log("I am manager in ", company, " company from last ", wah2, " years");
let xx = "Imran";
let wah3 = 18;
console.log(xx + " is " + wah3 + " years old");
var CamalCase = "PeshawarCityTown";
var ali = 30;
console.log("Old time variable = ", ali);
console.log(CamalCase);
let alive = false;
console.log(alive);
let var1;
console.log(var1);
let var2 = null;
console.log(var2);
const num1 = 4;
const num2 = 2;
const add = num1 + num2;
console.log("Addition of ", num1, " and ", num2, " is : ", add);
const sub = num1 - num2;
console.log("Subtraction of ", num1, " and ", num2, " is : ", sub);
const mul = num1 * num2;
console.log("Multiplication of ", num1, " and ", num2, " is : ", mul);
const div = num1 / num2;
console.log("Division of ", num1, " and ", num2, " is : ", div);
const mod = num1 % num2; //remainder
console.log("Modulus of ", num1, " and ", num2, " is : ", mod);
const pow = num1 ** num2; //power
console.log("Power of ", num1, " and ", num2, " is : ", pow);
// console.log(typeof add);
console.log("_________________________________________________________");
//Comparison operators
const user = 15;
const ifgrt = user > 15;
console.log("Condition is ", ifgrt);
const ifless = user < 15;
console.log("Condition is ", ifless);
const ifequ = user == 15;
console.log("Condition is ", ifequ);
const iflesseq = user <= 20;
console.log("Condition is ", iflesseq);
const ifgrteq = user >= 20;
console.log("Condition is ", ifgrteq);

const firstname = "Ahmad";
const secondname = " kareem";
const res = firstname + secondname; //first method to combine two strings
console.log(res);
const res2 = firstname.concat(secondname); //second method to combine two strings
console.log(res2);
const len = res2.length;
console.log(len);

const entername = prompt("Enter your first name");
const entername2 = prompt("Enter your second name");
const character11 =
  entername.charAt(0).toUpperCase() + entername.slice(1) + entername2;
console.log(character11);
const fname = prompt("What is your father name");
const immi = fname.charAt(0).toUpperCase() + fname.slice(1);
console.log(immi);
const addr = prompt("What is your address");
const toupper = addr.toUpperCase(); //toLowerCase();
console.log(toupper);

const w = "Ali is a student of class 7th, who is a good programmer too";
const w2 = w.includes("a student of class");
console.log(w2);
const sli = w.slice(4, 33); //-33
console.log(sli);

const rep = "Nasir Afridi";
const rep1 = rep.replace("s", "d");
console.log(rep1);
const rep2 = rep.replaceAll("di", "ko");
console.log(rep2);
console.log("_________________________________________________________");

const per = 95;
if (per < 0 || per > 100) {
  console.log("Your marks is not valid");
} else {
  if (per >= 90) {
    console.log("Your grade is A");
    if (per >= 95) {
      console.log("You deserve $100");
    } else {
      console.log("You deserve $50");
    }
  } else if (per >= 80) {
    console.log("Your grade is B");
  } else if (per >= 70) {
    console.log("Your grade is C");
  } else if (per > 50) {
    console.log("Your grade is D");
  } else if (per <= 50) {
    console.log("Your grade is F");
    if (per >= 40) {
      console.log("You still have a chance to get higher grade");
    } else if (per >= 30) {
      console.log("You have very minimum chances of getting higher grade");
    } else if (per < 30) {
      console.log("You are completely failed. You must repeat the course");
    }
  }
}

const obtainP = prompt("Enter your percentage to find your grade");
const converP = Number(obtainP);
console.log("Your percentage is ", obtainP);
if (obtainP > 100 || obtainP < 0) {
  console.log(
    "You entered invalid percentage. Please enter a valid percentage"
  );
} else {
  if (obtainP >= 90) {
    console.log("And your grade is A");
  } else if (obtainP >= 80) {
    console.log("And your grade is B");
  } else if (obtainP >= 70) {
    console.log("And your grade is C");
  } else if (obtainP >= 50) {
    console.log("And your grade is D");
  } else if (obtainP < 50) {
    console.log(
      "And your grade is F. You are failed and you should repeat your course again"
    );
  }
}

const people = ["Asim", "Kashif", "Yaseen"];
console.log(people);
console.log("Entery at 2nd location is", people[1]);
people[5] = "Waqas";
console.log("Updated array is ", people);
people[people.length] = "Wali";
people.push("Wazir");
console.log(people);
people[0] = "jebran"; //update data in array
console.log(people);
delete people[0];
console.log(people);
people.pop();
people.pop();
console.log(people);
people.unshift("Akram", "Hazrat Ali"); // add at the beggening of the array
console.log(people);
people.shift(); // delete from the beggening of the array
console.log(people);
const game = prompt("Enter a name here to check with the array");
const ifgame = people.includes(game);
if (ifgame) {
  console.log("This name already exist in our database");
} else {
  console.log("This is a new name");
}
