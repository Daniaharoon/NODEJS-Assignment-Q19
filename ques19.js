"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestArr = ["Yamna", "Ayesha", "Warisha", "Maham", "Saba"];
let canNotattend = "Ayesha";
let newGuest = "Faiza";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Rida");
let middleGuest = "Sania";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wania");
//// console.log(guestArr);
console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");
