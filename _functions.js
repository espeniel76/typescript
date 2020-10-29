"use strict";
let _anyType;
_anyType = 20;
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
add(5);
function add2(num1, num2 = 10) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add2(5, 10);
add2(5);
