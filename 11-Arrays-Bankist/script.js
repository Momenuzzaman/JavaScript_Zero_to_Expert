
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = (movements) => {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__value">${movement}</div>
    </div>
`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
const displayLabelBalance = (movements) => {
  const balance = movements.reduce((total, move) => total + move, 0);
  labelBalance.textContent = `${balance}€`;
};

displayLabelBalance(account1.movements);

const CalDisplaySummary = (movements) => {
  const income = movements.filter(movement => movement > 0)
    .reduce((total, amount) => total + amount, 0);
  labelSumIn.textContent = `${income}€`;

  const out = movements.filter(movement => movement < 0)
    .reduce((total, move) => total + move, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = movements.filter(movement => movement > 0)
    .map(movement => Math.round(movement * 1.10) / 100)
    .reduce((total, move) => total + move, 0);

  labelSumInterest.textContent = `${interest}€`;
};
CalDisplaySummary(account1.movements);

const createUserName = (accs) => {
  accs.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUserName(accounts);



// Event handler

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(account => account.userName === inputLoginUsername.value);
  console.log(currentAccount);
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// Slice**********
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));


// splice****************************
// arr.splice(1, 2);
// console.log(arr);

// concat

// const arr2 = ['g', 'h', 'i', 'j'];
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

// Reverse

// console.log(arr.reverse());

// join ************************************************

// console.log(letter.join(','));


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   movement > 0 ? console.log(`You deposit ${movement}`)
//     : console.log(`You Withdrew ${Math.abs(movement)}`);
// }

// // forEach************************************************
// movements.forEach(function (movement, index) {
//   movement > 0 ? console.log(`Movement ${index + 1}: You deposit ${movement}`)
//     : console.log(`Movement ${index + 1}: You Withdrew ${Math.abs(movement)}`);
// });


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (currency, key) {
//   console.log(`${key} : ${currency}`);
// });
// const name = ['eur', 'usd', 'usd', 'eur', 'grb', 'grb'];
// const uniqueCurrencies = new Set(name);
// uniqueCurrencies.forEach(function (currency) {
//   console.log(currency);
// });

// challenge1******

// const checkDogs = (dogsJulia, dogsKate) => {
//   // const dogJuliaCorrect = dogsJulia.slice(1,3);
//   const dogJuliaCorrect = dogsJulia.slice();
//   dogJuliaCorrect.splice(0, 1);
//   dogJuliaCorrect.splice(-2);

//   const dogs = [...dogJuliaCorrect, ...dogsKate];

//   dogs.forEach(function (dog, i) {
//     dog >= 3 ?
//       console.log(`Dog number ${i + 1} is an adult,and is ${dog} year old`)
//       : console.log(`dog number ${i + 1} is still puppy`);
//   });

// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementUSD = movements.map(movement => {
//   return movement * eurToUsd;
// });

// console.log(movementUSD);


// filter******
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const deposit = movements.filter(movement => movement > 0);
// // console.log(deposit);
// // const withdrawal = movements.filter(movement => 0 > movement);
// // console.log(withdrawal);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const total = movements.reduce((total, mov) => total + mov, 0);
// console.log(total);


// challenge 2
// const calcAverageHumanAge = (ages) => {
//   const humanAge = ages.map(age => {
//     return age <= 2 ? 2 * age : age * 4 + 16;
//   });
//   console.log(humanAge);
//   const adult = humanAge.filter(age => age > 18);
//   console.log(adult);
//   const avgAge = adult.reduce((total, age) => total + age, 0) / adult.length;
//   console.log(avgAge);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);