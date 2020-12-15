// Перед вами находится массив с продуктами в интернет-магазине. 
// Вам нужно:
// 1. Получить все товары, у которых есть фотографии, 
// можете использовать метод filter https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене (от низкой цены к высокой), 
// можете использовать метод sort https://mzl.la/2Y79hbZ , 
// как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
'use strict';
const products = [{
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

console.log(JSON.stringify(products));
// 1. Получить все товары, у которых есть фотографии, 
(products.filter(function(item) {
    return item.photos != null && item.photos.length != 0;
})).forEach(function(item) {
    console.log(item.id)
});
// 2. Отсортируйте товары по цене (от низкой цены к высокой),
console.log(products.sort(function(item1, item2) {
    return item1.price - item2.price;
}));