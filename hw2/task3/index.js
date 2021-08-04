"use strict";

let a = parseInt(prompt("Введите первое число")), b = parseInt(prompt("Введите второе число"));
if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}