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
    }
};

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
const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Vat'];
console.log(newMenu);


const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenu);

