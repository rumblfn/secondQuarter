"use strict";

function converter(num) {
    let value = +num, obj = {}, check = true;
    if (isNaN(num)) {
        console.log("NaN");
        check = false;
    } else {
        if (!Number.isInteger(value)) {
            console.log(`${value} not integer`);
            check = false;
        }
        if (value > 999 || value < 0) {
            console.log(`${value} out of range`);
            check = false;
        }
    }
    if (check) {
        num = "00" + num;
        obj.units = num.charAt(num.length - 1);
        obj.tens = num.charAt(num.length - 2);
        obj.hundreds = num.charAt(num.length - 3);
    }
    return obj;
}

console.log(converter(prompt()));