var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;

var markBMI = markMass / markHeight ** 2;
var johnBMI = johnMass / johnHeight ** 2;

var markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
if (markBMI > johnBMI) {
    console.log(`'Mark's ${markBMI} BMI is higher than John's`);

} else {
    console.log("John's BMI is higher than Mark's!");
}

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);




const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(+(inputYear), inputYear);
console.log(typeof (inputYear));
console.log("----------");

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("----------");

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');


console.log("----------");

let n = '1' + 1; // '11'
console.log(n);

n = n - 1;
console.log(n);

console.log("----------");



// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}




// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log("------");
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 15 / 100 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
