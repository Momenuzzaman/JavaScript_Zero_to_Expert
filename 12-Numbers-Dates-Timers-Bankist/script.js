

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__value">${movement.toFixed(2)}</div>
    </div>
`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayLabelBalance = (acc) => {
  acc.balance = acc.movements.reduce((total, move) => total + move, 0);
  let balance = acc.balance;
  labelBalance.textContent = `${balance.toFixed(2)}€`;
};


const CalDisplaySummary = (acc) => {
  const income = acc.movements.filter(movement => movement > 0)
    .reduce((total, amount) => total + amount, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements.filter(movement => movement < 0)
    .reduce((total, move) => total + move, 0);
  labelSumOut.textContent = `${out.toFixed(2)}€`;

  const interest = acc.movements.filter(movement => movement > 0)
    .map(movement => Math.round(movement * 1.10) / 100)
    .reduce((total, move) => total + move, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUserName = (accs) => {
  accs.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUserName(accounts);

// updateUI

const updateUI = (acc) => {
  //display movements
  displayMovements(acc.movements);
  // Display balance
  displayLabelBalance(acc);
  // display summery
  CalDisplaySummary(acc);
};



// Fake Always logged in
let currentAccount;
currentAccount = account1;
updateUI(account1);
containerApp.style.opacity = 100;

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

// Event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(account => account.userName === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // welcome message 
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();

  // transfer 

  btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    console.log(amount);
    const receiveAcc = accounts.find(account => account.userName === inputTransferTo.value);
    console.log(receiveAcc);

    if (amount > 0 && currentAccount.balance >= amount && receiveAcc?.userName !== currentAccount.userName) {
      currentAccount.movements.push(-amount);
      receiveAcc.movements.push(amount);
      updateUI(currentAccount);
    }
    inputTransferAmount.value = '';
    inputTransferTo.value = '';


  });
});

// Request Loan 
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(movement => movement >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// close Account 
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.userName && +inputClosePin.value === currentAccount.pin) {
    const index = accounts.findIndex(account => account.userName === currentAccount.userName);
    console.log(index);
    // delete account 
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// sort 
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// conversion
// console.log(Number('23'));
// console.log(+'11');

// // parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e23'));

// console.log(Number.parseFloat('10.10'));
// console.log(Number.parseFloat(100.100000));

// console.log(Number.isNaN(23));
// console.log(Number.isNaN("23"));
// console.log(Number.isNaN(+'abc'));

// // checking if value is number 

// console.log(Number.isFinite(23));
// console.log(Number.isFinite());  

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);

// console.log(21318409738957468058709657098409n);
// console.log(BigInt(2131840973895746805870965709840910000));

// const date = new Date();
// console.log(date);

// console.log(new Date('November,06,1998'));
// console.log(new Date(0));
