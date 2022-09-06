const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 Enhanced Object Literals
    hours,
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
// console.log(restaurant.hours.mon.open);
// Optional Chaining
// console.log(restaurant.hours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // for (const day of days) {
// //     const open = restaurant.hours[day]?.open ?? 'close';
// //     console.log(`On ${day}, we open it ${open}`);
// // }

// const properties = Object.keys(hours);
// console.log(properties);

// let openingStr = `we are open on ${properties.length} day`;
// for (const day of properties) {
//     openingStr += `${day},`;
// }
// console.log(openingStr);



// const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of allMenu) console.log(item);

// for (const [it, element] of allMenu.entries()) {
//     console.log(`${it + 1} : ${element}`);
// }
// console.log(restaurant.hours);
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

// const guest = restaurant.numberGuest ? restaurant.numberGuest : 10;
// console.log(guest);

// const guest1 = restaurant.numberGuest || 2;
// console.log(guest1);

// console.log('---And---');

// console.log(0 && 'Emon');
// console.log(10 && 'Liton');

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('Olives', 'mushrooms');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'Olives');


// restaurant.guestNumber = 0;
// const guestNumber = restaurant.guestNumber ?? 10;
// console.log(guestNumber);

// set ================================================================

// const orderSet = new Set(['Emon', 'Liton', 'Emon', 'Liton', 'Ruhi', 'Emon', 'Liton', 'Ruhi', 'Ayyan']);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Emon'));
// orderSet.add('Rabaya');
// console.log(orderSet);
// orderSet.delete('Emon');
// console.log(orderSet);

// console.log(new Set('Emon'));

// const staff = ['waiter', 'Manager', 'waiter', 'Chef', 'Chef'];
// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);
// console.log(new Set(staff).size);

// const ariLine = 'Tap Air Portugal';
// const plan = 'A20';

// console.log(plan[1]);
// console.log(ariLine[4]);

// console.log(ariLine.length);
// console.log(ariLine.indexOf('P'));

// console.log(ariLine.slice('4'));
// console.log(ariLine.slice(4, 7));


// const passenger = 'EmOn';
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'md@gmail.com';
// const loginEmail = '   Md@gmail.com  ';

// const correctEmail = loginEmail.toLowerCase().trim();
// console.log(correctEmail);

// console.log(email === correctEmail);

// const announcement = 'All passenger come to boarding door 23. boarding door 23';
// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replaceAll('door', 'gate'));

// const checkBaggage = (item) => {
//     const baggage = item.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are not  allowed on boards.');
//     }
//     else {
//         console.log('You are allowed on boards.');
//     }
// };
// checkBaggage('I have laptop and pocket Knife');
// checkBaggage('Some Food and camera');

// const name = 'Md Momenuzzaman';
// console.log(name.split(' '));

// const capitalizedName = (name) => {
//     const names = name.split(' ');
//     const nameUpper = [];
//     for (const n of names) {
//         // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//         nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(nameUpper.join(' '));
// };
// capitalizedName('md emon');

const maskCard = (number) => {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCard(12342455435));