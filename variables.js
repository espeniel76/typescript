"use strict";
/**
 * Variable Declarations
 * Variable Types
 */
let isBeginner = true;
let total = 0;
let _name = "Vishwas";
let sentence = `My name is ${_name}
I am a beginner in Typescript`;
// console.log(sentence);
let n = null;
let u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// console.log(c);
let randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
let myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// myVariable();
// (myVariable as string).toLocaleUpperCase();
let a;
a = 10;
a = true;
let b = 20;
let multiType;
multiType = 20;
multiType = true;
let anyType;
anyType = 20;
anyType = true;
