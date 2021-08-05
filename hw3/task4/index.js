"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhoto = products.filter(function (prod) {
    if ("photos" in prod) {
        return prod.photos.length;
    }
    return false;
})

const sortedProducts = products.sort(function (prod1, prod2) {
    if (prod1.price > prod2.price) {
        return 1;
    }
    if (prod1.price < prod2.price) {
        return -1;
    }
    return 0;
})

console.log(productsWithPhoto);
console.log(sortedProducts);