"use strict";

for (let i = 1; i <= 20; i++) {
    let str = "";
    for (let j = 0; j < i; str += "*", j++) {}
    console.log(str);
}