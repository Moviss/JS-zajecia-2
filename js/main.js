"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const daysSelect = document.getElementById('days');
const output = document.querySelector('#js-output');
output.textContent = WELCOME_MESSAGE;

// const selectedDay = "środa";
daysSelect.addEventListener('change', function () {
  const selectedDay = daysSelect.value;

  // if (selectedDay) {
  //   output.textContent = `Twój dzień tygodnia to ${selectedDay}.`;
  // } else {
  //   output.textContent = '';
  // }

  let message;

  switch (selectedDay) {
    case 'poniedziałek':
      message = "Poniedziałek: Chyba ktoś tu ma przypadłość poniedziałkową!";
      break;
    case 'wtorek':
      message = "Wtorek: Gratulacje! Jesteś o jeden dzień bliżej weekendu!";
      break;
    case 'środa':
      message = "Środa: No proszę, połowa tygodnia za nami! Wytrwałość!";
      break;
    case 'czwartek':
      message = "Czwartek: Czwartek to taki mały piątek!";
      break;
    case 'piątek':
      message = "Piątek: Nareszcie! Gotów na weekend?";
      break;
    case 'sobota':
      message = "Sobota: Najlepszy dzień na leniwe śniadanie i relaks!";
      break;
    case 'niedziela':
      message = "Niedziela: Ostatni dzień wolnego, naładuj baterie na cały tydzień!";
      break;
    default:
      message = '';
  }

  output.textContent = message;
});


// const day = "środa";
//
// if (day === "poniedziałek" || day === "piątek") {
//   console.log(`Dziś jest ${day}!`);
// } else if (day === "czwartek") {
//   console.log("Ale to jest czwartek!!!!!");
// } else if (day === "środa") {
//   console.log("Moja środa!");
// }
// else {
//   console.log("Nie znam takiego dnia!");
// }
//
// console.log("Po sprawdzeniu dnia!");

// let type;
// const age = 20;
//
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
//
// console.log(type);

// <warunek> ? <wyrażenie_jeśli_warunek_spełniony> : <wyrażenie_jeśli_warunek_nieprawdziwy>

// const age = 10;
// const type = age >= 18 ? "adult" : "child";
//
// console.log(type);

// let message;
//
// switch (selectedDay) {
//   case 'poniedziałek':
//     message = "Poniedziałek: Chyba ktoś tu ma przypadłość poniedziałkową!";
//     break;
//   case 'wtorek':
//     message = "Wtorek: Gratulacje! Jesteś o jeden dzień bliżej weekendu!";
//     break;
//   case 'środa':
//     message = "Środa: No proszę, połowa tygodnia za nami! Wytrwałość!";
//     break;
//   case 'czwartek':
//     message = "Czwartek: Czwartek to taki mały piątek!";
//     break;
//   case 'piątek':
//     message = "Piątek: Nareszcie! Gotów na weekend?";
//     break;
//   case 'sobota':
//     message = "Sobota: Najlepszy dzień na leniwe śniadanie i relaks!";
//     break;
//   case 'niedziela':
//     message = "Niedziela: Ostatni dzień wolnego, naładuj baterie na cały tydzień!";
//     break;
//   default:
//     message = '';
// }
//
// console.log(message);


// if (true) {
//   const myVar = "Moja zmienna";
//   console.log(myVar);
// }
//
// console.log(myVar);


// const global = "global";
//
// if (true) {
//   const blockA = "block A";
//
// // Możemy użyć globalnego zakresu i lokalnego zakresu A
//   console.log(global);// 'global'
//   console.log(blockA);// block A
//
// // Zmienne blockB i blockC nie są odznalezione w dostępnych zakresach.
// // Pojawi się błąd wykorzystania zmiennej.
// //   console.log(blockB);// ReferenceError: blockB is not defined
// //   console.log(blockC);// ReferenceError: blockC is not defined
//
//   if (true) {
//     const blockB = "block B";
//
// // Możemy użyć globalnego zakresu + zewnętrznego A + lokalnego B
//     console.log(global);// global
//     console.log(blockA);// block A
//     console.log(blockB);// block B
//
// // Zmienna blockC nie jest odnaleziona w dostępnych zakresach.
// // Pojawi się błąd wykorzystania zmiennej.
//     console.log(blockC);// ReferenceError: blockC is not defined
//   }
// }
//
// if (true) {
//   const blockC = "block C";
//
// // Możemy użyć globalnego zakresu + lokalnego C
//   console.log(global);// global
//   console.log(blockC);// block C
//
// // Zmienne blockA i blockB nie są odnalezione w dostępnych zakresach.
// // Pojawi się błąd wykorzystania zmiennej.
//   console.log(blockA);// ReferenceError: blockA is not defined
//   console.log(blockB);// ReferenceError: blockB is not defined
// }
//
// // Użyjmy tylko globalnego zakresu
// console.log(global);// global
//
// // Zmienne blockA, blockB i blockC
// // nie są odznalezione w dostępnych zakresach.
// // Pojawi się błąd wykorzystania zmiennej.
// console.log(blockA);// ReferenceError: blockA is not defined
// console.log(blockB);// ReferenceError: blockB is not defined
// console.log(blockC);// ReferenceError: blockC is not defined


// NIGDY TAK NIE RÓB!!!

// const var1 = "1";
//
// if (true) {
//   const var1 = "123";
//   console.log(var1);
// }
//
// console.log(var1);

// let counter = -10;
//
// while (counter < 10) {
//   console.log("Iteracja numer", counter);
//   counter += 1;
// }


// let password = "";
//
// do {
//   password = prompt("Wprowadź hasło dłuższe niż 4 znaki", "");
// } while (password.length < 5);
//
// console.log("Hasło zostało wprowadzone: ", password);

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

// const target = Number(prompt("Wprowadź cel", "0"));
// let sum = 0;
//
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
//
// console.log(sum);

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
//
//   if (i === 3) {
//     console.log("osiągneliśmy 3, przerywamy wykonywanie pętli");
//     break;
//   }
// }
//
// console.log("wiadomość po pętli");


// const number = 10;
//
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//
//   console.log("Nieparzyste i: ", i); // 1, 3, 5, 7, 9
// }

// const myString = "Jakiś tekst!";
//
// for (let i = 0; i < myString.length; i += 1) {
//   console.log(myString[i]);
// }

