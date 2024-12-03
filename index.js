
let age = 18;

if (age >= 18) {
    console.log("you are eligible voting")
} else {
    console.log("you are not eligible vote")
}

let mood = "silver";
let color;

if (mood === "dark") {
    console.log("black");
} else if (mood === "pink") {
    console.log("pink");
} else {
    color = "white"
}
console.log(color);

let num = 5;

if (num % 2 === 0) {
    console.log("even")
} else {
    console.log("odd");
}

let value = 1000;

if (value >= "0" && value <= "1000") {
    console.log("digit");
} else if (value >= "a" && value >= "z" || value >= "A" && value >= "Z") {
    console.log("Aalphabet");
} else {
    console.log("Spicial Charcters");
}


let  alphabet;
let  digit=555;

if(alphabet >= "a" || alphabet >= "b" || alphabet >= "c" || alphabet >= "d" || alphabet >= "e" || alphabet >= "f" 
    || alphabet >= "g" || alphabet >= "h" || alphabet >= "i" || alphabet >= "j" || alphabet >= "k" || alphabet >= "l" 
    || alphabet >= "m" || alphabet >= "n" || alphabet >= "o" || alphabet >= "p" || alphabet >= "q" || alphabet >= "r" 
    || alphabet >= "s" || alphabet >= "t" || alphabet >= "u" || alphabet >= "v" || alphabet >= "w" || alphabet >= "x" 
    || alphabet >= "y" || alphabet >= "z"
     && alphabet >= "A" ||alphabet >= "B" ||alphabet >= "C" ||alphabet >= "D" 
    ||alphabet >= "E" ||alphabet >= "F" ||alphabet >= "G" ||alphabet >= "H" ||alphabet >= "I" ||alphabet >= "J" 
    ||alphabet >= "K" ||alphabet >= "L" ||alphabet >= "M" ||alphabet >= "N" ||alphabet >= "O" ||alphabet >= "P" 
    ||alphabet >= "Q" ||alphabet >= "R" ||alphabet >= "S" ||alphabet >= "T" ||alphabet >= "U" ||alphabet >= "V"
     ||alphabet >= "W" ||alphabet >= "X" ||alphabet >= "Y" || alphabet >= "Z" || digit >= "1" && digit <= "1000"){
        console.log("ALAPHABET && digit")
     }else{
        console.log("enter the valid number;")
     }


let amount = 96871582;
let n500, n200, n100, n50, n20, n10, n5, n2, n1
n500 = n200 = n100 = n50 = n20 = n10 = n5 = n2 = n1 = 0

if (amount >= 500) {
    n500 = parseInt(amount / 500)
    amount -= n500 * 500
    console.log(n500);
} if (amount >= 200) {
    n200 = parseInt(amount / 200)
    amount -= n200 * 200
    console.log(n200);
} if (amount >= 100) {
    n100 = parseInt(amount / 100)
    amount -= n100 * 100
    console.log(n100);
} if (amount >= 50) {
    n50 = parseInt(amount / 50)
    amount -= n50 * 50
    console.log(n50);
} if (amount >= 20) {
    n20 = parseInt(amount / 20)
    amount -= n20 * 20
    console.log(n20);
} if (amount >= 10) {
    n10 = parseInt(amount / 10)
    amount -= n10 * 10
    console.log(n10);
}
// document.write("500 of notes" + n500 + "<br>")
// document.write("200 of notes" + n200 + "<br>")
// document.write("100 of notes" + n100 + "<br>")
// document.write("50 of notes" + n50 + "<br>")
// document.write("20 of notes" + n20+ "<br>")
// document.write("10 of notes" + n10 + "<br>")

let abb = ""

abb += "no of 500 notes" + n500 + "<br>"
abb += "no of 200 notes" + n200 + "<br>"
abb += "no of 100 notes" + n100 + "<br>"
abb += "no of 50 notes" + n50 + "<br>"
abb += "no of 20 notes" + n20 + "<br>"
abb += "no of 10 notes" + n10 + "<br>"
abb += "no of 5 notes" + n5 + "<br>"
abb += "no of 2 notes" + n2 + "<br>"
abb += "no of 1 notes" + n1 + "<br>"

document.write(abb);

let p = 200;
let q = 500;

if (q > p) {
    console.log("q is a maximum");
} else {
    console.log("p is a minimum");
}

let aa = 500;
let bb = 600;
let cc = 700;
let dd = 100;

if (aa > bb && aa > cc && aa > dd) {
    console.log("aa is maximum");
} else if (bb > cc && bb > dd) {
    console.log("bb is maximum");
} else {
    console.log("cc is maximum");
}

let number = -152;

if (0 < number) {
    console.log("number is positive");
} else if (0 > number) {
    console.log("number is nagative");
} else {
    console.log("number is zero");
}

let number1 = 555;

if (number1 % 9 === 0 || number1 % 22 === 0) {
    console.log("number is division by 9 or 22");
} else {
    console.log("number is not division by 9 or 22");
}

let gujrati = 100;
let sci = 80;
let sanskrit = 60;
let english = 100;
let social = 100;
let maths = 100;
let hindi = 60;

sum = (gujrati + sci + sanskrit + english + social + maths + hindi) / 7
console.log(sum)

if (sum >= 90 && sum <= 100) {
    console.log("grade a");
} else if (sum >= 80 && sum <= 89) {
    console.log("grade b");
} else if (sum >= 70 && sum <= 79) {
    console.log("grade c");
} else if (sum >= 50 && sum <= 69) {
    console.log("grade d");
} else if (sum >= 0 && sum <= 59) {
    console.log("fail");
} else {
    console.log("enter the valid number");
}

let day = 4;

 if(day=="1"){
    console.log("monday")
 }else if(day=="2"){
    console.log("tuesday")
 }else if(day=="3"){
    console.log("wednesday");
 }else if(day=="4"){
    console.log("thusday");
 }else if(day=="5"){
    console.log("friday");
 }else if(day=="6"){
    console.log("saturday");
 }else if(day=="7"){
    console.log("sunday");
 }else{
    console.log("valid enter your number");
 }

let sellingPrice = 2000;
let costPrice = 25000;

if (costPrice < sellingPrice) {
    console.log("profit");
} else {
    console.log("loss");
}

let month = "2";

switch (month) {
    case "1":
        console.log("january");
        break;
    case "2":
        console.log("february");
        break;
    case "3":
        console.log("march");
        break;
    case "4":
        console.log("april");
        break;
    case "5":
        console.log("may");
        break;
    case "6":
        console.log("june");
        break;
    case "7":
        console.log("julay");
        break;
    case "8":
        console.log("augast");
        break;
    case "9":
        console.log("sptember");
        break;
    case "10":
        console.log("october");
        break;
    case "11":
        console.log("november");
        break;
    case "12":
        console.log("desember");
        break;
    default:
        console.log("enter the valid number")
}

let time = 10;

if (time <= 10) {
    console.log("good morning");
} else if (time <= 18) {
    console.log("good afternoon");
} else if (time <= 24) {
    console.log("good nghit");
} else {
    console.log("enter the valid time");
}

let leap = 2030;

if (leap % 4 === 0) {
    console.log("leap year");
} else {
    console.log("no leap year");
}


// #######################################






