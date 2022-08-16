const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainMenuIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
    },
    orderDelivery: function ({ starterIndex, mainMenuIndex, time, address }) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]}will  be delivered to ${address}  at ${time}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

// restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainMenu] = restaurant.order(2, 0);
// console.log(starter, mainMenu);

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// restaurant.orderDelivery(
//     {
//         time: 1.25,
//         address: 'Dhaka, bangladesh',
//         starterIndex: 3,
//         mainMenuIndex: 1
//     }
// );
// const arr = [4, 5, 6];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Vat'];
// console.log(newMenu);


// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// const str = 'Emon';
// const newStr = [...str, 'e'];
// console.log(newStr);

// const arr = [1, 2, 3, ...[4, 5, 6]];
// console.log(arr);

// const [a, b, ...other] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, other);

// const [pasta, soup, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pasta, soup, other);

// const { sat, ...weekends } = restaurant.openingHours;
// console.log(weekends)

// // const add = (...numbers) => {
// //     console.log(numbers)
// // }
// const add = (...numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//         console.log(sum);
//     }
// };

// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// console.log(3 || 'Emon');
// console.log('Liton' || 2);
// console.log(undefined || null);
// console.log(true || 0);
// console.log(undefined || 0 || null || 'Emon' || true);

const guest = restaurant.numberGuest ? restaurant.numberGuest : 10;
console.log(guest);

const guest1 = restaurant.numberGuest || 2;
console.log(guest1);