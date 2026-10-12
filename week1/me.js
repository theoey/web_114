"use strict";
/* Part 2)
myName, Data type: String   Explanation: It's a word (My name)
favColor, Data type: String   Explanation: It's a word (favorite color)
favFood, Data type: String    Explanation: It's a word (favorite food)
favAnimal, Data type: String   Explanation: It's a word (favorite animal)
favSeason, Data type: String   Explanation: It's a word (favorite season)
myAge, Data type: Number   Explanation: It's a number, no float
isStudent, Data type: Boolean   Explanation: It's T or F (will be True)
*/

//Part 3)
let  myName = "Joseph";
let favColor = "Blue";
let favFood = "Mushroom pizza";
let favAnimal = "Dog";
let favSeason = "Fall";
let myAge = 40;
let isStudent = true;

/* Part 4) I think likely the isStudent variable could be missed as the wrong data type. Instead of using a boolean
which can be T/F or 1/0, I could see some folks doing it as a string and just typing out "True" or "False"*/

console.log("Hi my name is ",  myName, ". Some facts about me are: favorite color is", favColor, "and my favorite food is", favFood,"."); 
console.log("Also, my favorite season is ", favSeason, "and my favorite animal is a", favAnimal, ".", "I am currently ", myAge, "and it is",isStudent,"that I am a student.");

// 1. Which data type was easiest to choose? String Why? Since string is just words and no math is needed to be done with the. 
// 2. Which variable was hardest to decide a data type for? isStudent probably. Could just do a string and type True, but boolean is better for it.
// 3. What happens if a number is stored as a string in JavaScript? It gets treated as text and will just be connected to any other words. Can't do math with it.
// 4. Why is it helpful to plan data types before coding? As you start connect things, having a plan ensures the apprpriate items are connected and dont' error out