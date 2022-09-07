// const bookings = [];

// const createBooking = (flightNum, numberOFPassenger = 1, price = 150 * numberOFPassenger) => {
//     const booking = {
//         flightNum,
//         numberOFPassenger,
//         price
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('ALC23', 2);
// createBooking('ALC24', 10);
// console.log(bookings);


// const flight = 'LH221';
// const emon = {
//     name: 'Emon',
//     passport: 22123212432
// };

// const checkIn = (flightNum, passenger) => {
//     flightNum = 'LH123';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 22123212432) {
//         alert('Checked in');
//     }
//     else {
//         alert('Wrong passport');
//     }
// };

// checkIn(flight, emon);
// console.log(emon);

// const greed = (greeting) => {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greedHey = greed('Hey');
// greedHey('Emon');

// greed('hello')('Liton');

// const lufthansa = {
//     ariLine: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.ariLine} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode} ${flightNum},${name}` });
//     }
// };
// const bangladeshBiman = {
//     ariLine: 'BangladeshBiman',
//     iataCode: 'BHB',
//     bookings: [],
// };
// const book = lufthansa.book;
// lufthansa.book(239, "Emon");
// lufthansa.book(2002, 'Liton');
// console.log(lufthansa.bookings);

// book.call(bangladeshBiman, 244, 'Mary Cooper');
// console.log(bangladeshBiman);

// const data = [222, 'Monir'];
// book.apply(bangladeshBiman, data);

// lufthansa.planes = 200;
// lufthansa.byePlane = function () {
//     this.planes++;
//     console.log(this.planes);
// };
// // lufthansa.byePlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.byePlane.bind(lufthansa));


// closures************
// const booking = () => {
//     let passenger = 0;
//     return function () {
//         passenger++;
//         console.log(`${passenger} passenger`);
//     };
// };

// const book = booking();
// book();
// book();

let f;
const g = () => {
    const a = 20;
    f = function () {
        console.log(a * 2);
    };
};

g();
f();