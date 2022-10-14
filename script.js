// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Noah Gutriz',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function(movements, sort = false){
//   containerMovements.innerHTML = '';
//     //.textContent = 0

//     const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

//     movs.forEach(function(mov, i){
//         const type = mov > 0 ? 'deposit' : 'withdrawal'

//         const html = `
//         <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${i + 1} ${type} deposit</div>
//           <div class="movements__value">${mov}₿</div>
//         </div> `

//         containerMovements.insertAdjacentHTML('afterbegin', html)
//     });
// }



// // console.log(containerMovements.innerHTML);
// const calcDisplayBalance = function(acc){
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  
//   labelBalance.textContent = `${acc.balance} BTC`;
// }


// const calcDisplaySummary = function(acc){
//   const incomes = acc.movements
//   .filter(mov => mov>0)
//   .reduce((acc, mov) => acc + mov,0);
//   labelSumIn.textContent = `${incomes}₿`;

//   const out = acc.movements
//   .filter(mov => mov<0)
//   .reduce((acc, mov) => acc + mov,0);
//   labelSumOut.textContent = `${Math.abs(out)}₿`

  
//   const interest = acc.movements
//   .filter(mov => mov >0)
//   .map(deposit => (deposit * acc.interestRate)/ 100)/// percentage
//   .filter((int, i , arr) => {
//     console.log(arr);
//     return int >= 1
//   })
//   .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}₿`;
// }


// const user = 'Steven Thomas Williams'; //stw
// const createUsernames = function(accs){
//   accs.forEach(function(acc){
//     acc.username = acc.owner
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');

//   })

// };
// createUsernames(accounts)

// const updateUI = function(acc){
  
//         //Display movements
//         displayMovements(acc.movements)

//         //Display balance
//         calcDisplayBalance(acc)
        
//         //Display summary
//         calcDisplaySummary(acc )
//     }


// //Event Handler 

// let currentAccount;
// btnLogin.addEventListener('click', function(e){
//   //prevent form from submitting 
//   e.preventDefault();
  

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//     );
//     console.log(currentAccount);

//     if(currentAccount?.pin === Number(inputLoginPin.
//       value)){

        
//         //Display UI and message
//         labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
//         containerApp.style.opacity = 100;

//         //clear input fields
//         inputLoginUsername.value = inputLoginPin.value = '';
//         inputLoginPin.blur();

//         updateUI(currentAccount)
//       }
// });

// btnTransfer.addEventListener('click', function(e){
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value);
//     inputTransferAmount.value = inputTransferTo.value = '';
    
//     if(amount > 0 && receiverAcc && currentAccount.balance >= amount &&
//        receiverAcc?.username !== currentAccount.username){

//         //doing transfer
//          console.log('Transfer valid');
//          currentAccount.movements.push(-amount);
//          receiverAcc.movements.push(amount);
//          //Update UI
//          updateUI(currentAccount);

//        }
// });

// btnLoan.addEventListener('click', function(e){
//   e.preventDefault();
//   const amount = Number(inputLoanAmount.value);
  
//   if(amount > 0 && currentAccount.movements
//     .some(mov => mov >= amount * 0.1 )){
//       //Add movement
//       currentAccount.movements.push(amount);

//       //update UI
//       updateUI(currentAccount);
//   }
// })


// btnClose.addEventListener('click', function(e){
//   e.preventDefault();
  
 

//   if(inputCloseUsername.value === currentAccount.
//     username &&
//      Number(inputClosePin.value) === currentAccount.pin){
//        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
//        console.log(index);

//       accounts.splice(index, 1);

//       //HIDE UI
//       containerApp.style.opacity = 0;
//      } 
//      inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;
// btnSort.addEventListener('click', function(e){
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted)
//    sorted = !sorted
// })




// // €


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// //test data 1
// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];
// //  const splicedK = kateData.splice(0,1)
// // const splicedK2 = kateData.splice(-2)
// // const splicedJ = juliaData.splice(-2)
// //  const splicedJ2 = juliaData.splice(0,1)
// // const newarr = [...juliaData, ...kateData]


// //test data2 
// const juliaData2 = [9, 16, 6, 8, 3]
// const kateData2 = [10, 5, 6, 1, 4]
// // const sJ = juliaData2.splice(0,1)
// // const sJ2 = juliaData2.splice(-2)
// // const sK = kateData2.splice(0,1)
// // const sK2 = kateData2.splice(-2)
// // const newarr2 = [...juliaData2, ...kateData2]
// // console.log(newarr2);



// const checkDogs = function(dogJulia, dogkate){
//   const newdogJ = dogJulia.slice(1, 3)
//   const newdogK = dogkate.slice(1, 3)
//   const newDog = [...newdogJ, ...newdogK]

//   newDog.forEach(function(age, index, array){
//     if(age >= 3){
//       console.log(`Dog number ${index+1} is an adult, and is ${age} years old`);
//     }else{
//       console.log(`Dog number ${index+1} is still a puppy`);
//     }
//   });

// }
// checkDogs(juliaData2, kateData2)
//  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // nb b
// const movementsUSDfor = [];
// for(const mov of movements)movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// // const movementsUSD = movements.map(function(mov){
// //   return mov * eurToUsd;
// // });
// // console.log(movements);
// // console.log(movementsUSD);

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// const movementsDescriptions = movements.map((mov, i,) =>{

//   `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'}${Math.abs(mov)}`

//   // if(mov > 0){
//   //   return ` Movement ${i+1}: You desposited ${mov}`;
//   // }else{
//   //   return `Movement ${i+1}: You withdraw ${Math.abs(mov)}`
//   // }

// })
// console.log(movements);
// // console.log(movementsUSD);
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0); // the 0 is the number it starts counting from
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2 += mov;

// console.log(balance2);

//Maximum value

// const max = movements.reduce(function(acc, cur, i, array){
//   if(acc < cur) acc = cur
//   return acc

// },movements[0])

// console.log(max);
// const testData1 = [5, 2, 4, 1, 15, 8, 3]
// const testData2 = [16, 6, 10 , 5, 6, 1, 4]

// const calcAverageHumanAge = function(ages){
//  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4)); 
//   console.log(humanAges);
//   const olderDogs = [];
// humanAges.forEach(function(value){
//   if(value >= 18) olderDogs.push(value)
// })
// const x = olderDogs.reduce(function(acc, cur, i){
//  let sum = acc + cur 
//  return sum / olderDogs.length
// }, olderDogs[0])

// console.log(x);

  

// }
// calcAverageHumanAge(testData1);

// calcAverageHumanAge(testData2);

// const eurToUsd = 1.1;
// //pipeline
// const totalDepositsUSD = movements
// .filter(mov => mov > 0)
// .map((mov, i, arr) => {
//   // console.log(arr);
//  return mov * eurToUsd
// })
// // .map(mov => mov * eurToUsd)
// .reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepositsUSD); 


// const calcAverageHumanAge = function(ages){
//  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4)); 
//   console.log(humanAges);
//   const olderDogs = [];
// humanAges.forEach(function(value){
//   if(value >= 18) olderDogs.push(value)
// })
// const x = olderDogs.reduce(function(acc, cur, i){
//  let sum = acc + cur 
//  return sum / olderDogs.length
// }, olderDogs[0])

// console.log(x);

// const testData1 = [5, 2, 4, 1, 15, 8, 3]
// const testData2 = [16, 6, 10 , 5, 6, 1, 4]

// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);


//   const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length,0);
//   return average
// };

// const avg1 = calcAverageHumanAge(testData1)

// const avg2 = calcAverageHumanAge(testData2)
// console.log(avg1, avg2);

// const calcAverageHumanAge2 = ages => {
//   const x = ages.map(age =>(age <= 2 ? 2 * age : 16 + age * 4))
//   .filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return x
// }

// console.log(calcAverageHumanAge2(testData1));

// const firsWithdrawal = movements.find(mov => mov < 0);
// // console.log(movements);
// // console.log(firsWithdrawal);

// // console.log(accounts);


// const account = accounts.find(acc => acc.owner === 
//   'Jessica Davis');
// console.log(account);


  // const arr = [[1, 2, 3], [4, 5, 6,], 7, 8];
  // console.log(arr.flat());

  // const arrDeep = [[[1, 2,], 3], [4, [5, 6]], 7, 8];
  // console.log(arrDeep.flat(2));

  // const accountMovements = accounts.map(acc => acc.movements)
  // console.log(accountMovements);

  // const allMovements = accountMovements.flat()
  // console.log(allMovements);

  // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
  // console.log(overalBalance);

  // const overalBalance2 = accounts.map(acc => acc.movements)
  // .flat()
  // .reduce((acc, mov) => acc + mov, 0)
  
  // console.log(overalBalance2);


  // //flat map

  // const overBalance2 = accounts
  // .flatMap(acc => acc.movements)
  // .reduce((acc, mov) => acc + mov, 0)

//   const owners = ['Jonas', 'Zach', 'Britton', 'Tivon'];
//   console.log(owners.sort());
//   console.log(owners);

//   console.log(movements);
//   // console.log(movements.sort());
// //Ascending
//   movements.sort((a, b) => {
//     if(a > b)
//     return 1;
//     if(b > a)
//     return -1;
//   } );
  
// // //Descending
// //   movements.sort((a, b) => {
// //     if(a < b)
// //     return 1;
// //     if(b < a)
// //     return -1;
// //   } );

//   console.log(movements); 

// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sort((a, b) => b - a)

// console.log(movements);
// const arr = [1, 2, 3, 4, 5]
// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7)
// console.log(x);
// console.log(x.map(() => 5))

// x.fill(1, 2, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);


// //array.from

// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1)
// console.log(z);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

// labelBalance.addEventListener('click', function(){
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//     );

//   console.log(movementsUI);


// });
// //1.
// const bankDepositSum = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov > 0)
// .reduce((sum, cur) => sum + cur, 0);
//   console.log(bankDepositSum);

// //2.
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .reduce((count, cur) => cur >= 1000 ? ++count : count , 0)


// // .filter(mov => mov >= 1000).length   solution 1

// console.log(numDeposits1000);

// //prefix ++ operator
// let a = 10
// console.log(a++);
// console.log(a);



// //3.
// const {deposits, withdrawals} = accounts
// .flatMap(acc => acc.movements)
// .reduce((sums, cur) => {
// // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;       //solution 1
// sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
// return sums

// }, {deposits: 0, withdrawals: 0})

// console.log(deposits, withdrawals);


// //4. this is a nice title -> This Is a Nice Title
// const convertTitleCase = function(title){
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//   .toLowerCase()
//   .split(" ")
//   .map(word => exceptions.includes(word) ? word : capitalize(word))
//   .join(" ")
//   return capitalize(titleCase);

// };
//   console.log(convertTitleCase('this is a nice title'));
//   console.log(convertTitleCase('this is a LONG title but not too long'));
//   console.log(convertTitleCase('an britton is a gay ass motherfucker'));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 4, curFood: 74, owners: ['Noah'] },
  ];

console.log(dogs);
const recommendedFood =dogs
.forEach(dog => ((dog.recommendedFood = Math.trunc(dog.weight ** .75 * 28)))) //result in grams

// dogs.forEach(dog => dog.recommendedFood0 = recommendedFood )//adding recommendedFood as a new property in each object

// const sarahsDog = dogs.forEach(dog => dog.owners).find(owner => owner === 'Sarah')
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'))
if(sarahsDog.curFood >= sarahsDog.recommendedFood){
  console.log(`Sarah's dog is eating too much`)
}else{
  console.log(`Sarahs dog is too little`);
}

const ownerWhoEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recommendedFood * 0.90)
.flatMap(dog => dog.owners)
  
const ownerWhoEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recommendedFood * 1.10)
.flatMap(dog => dog.owners )

console.log(`${ownerWhoEatTooMuch[0]} and ${ownerWhoEatTooMuch[1]} and ${ownerWhoEatTooMuch[2]} and ${ownerWhoEatTooMuch[3]}'s dogs eat too much!`);
console.log(`${ownerWhoEatTooLittle[0]} and ${ownerWhoEatTooLittle[1]}'s dogs eat too little!`);

const anyDogsEatingExactAmount = dogs.some(dogs => dogs.curFood === dogs.recommendedFood )

const anyDogsEatingOkayAmount = dogs.some(dogs => dogs.curFood > dogs.recommendedFood * 0.90 && dogs.curFood < dogs.recommendedFood * 1.10)

console.log(anyDogsEatingExactAmount)
console.log(anyDogsEatingOkayAmount);

const arrayOkayDogs = dogs.filter(dogs => dogs.curFood > dogs.recommendedFood * 0.90 && dogs.curFood < dogs.recommendedFood * 1.10)

console.log(arrayOkayDogs)

const shallowdogsarr = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(shallowdogsarr);