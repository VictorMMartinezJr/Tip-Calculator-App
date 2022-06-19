"use strict";

const billInput = document.querySelector(".bill-input");
const emptyBill = document.querySelector(".empty-bill");
const tipAmounts = document.querySelectorAll(".tip");
const numOfPeopleInput = document.querySelector(".people-input");
const emptyPeople = document.querySelector(".empty-people");
const tipPerPerson = document.querySelector(".tip-amount-person");
const totalPerPerson = document.querySelector(".total-amount-person");

let tipAmount;
let billAmount;
let numOfPeople;
let tipPerPersonNumber;
let totalPerPersonNumber;

// Update value of billAmount when billInput changes
billInput.addEventListener("input", () => {
  // Only update value if billInput value is a number
  if (isNaN(billInput.value) || billInput.value === "0") {
    emptyBill.textContent = "Enter a valid bill amount";
    return;
  } else {
    billAmount = billInput.value;
    emptyBill.textContent = "";
  }
});

// Update value of numOfPeople when number of people input changes
numOfPeopleInput.addEventListener("input", () => {
  // Only update value if numOfPeople Input value is a number
  if (isNaN(numOfPeopleInput.value)) {
    emptyPeople.textContent = "Enter a valid number";
    return;
  } else if (numOfPeopleInput.value === "0") {
    emptyPeople.textContent = "Cant be zero";
    return;
  } else {
    numOfPeople = numOfPeopleInput.value;
    emptyPeople.textContent = "";
  }
});

// Add click event to each tip amount
tipAmounts.forEach((tip) => {
  tip.addEventListener("click", () => {
    // Check if the bill amount exists and is a number
    if (!billAmount) {
      emptyBill.textContent = "Enter a valid bill amount";
      tipAmounts.forEach((tip) => tip.classList.remove("active"));
      return;
    } else if (!numOfPeople) {
      emptyPeople.textContent = "Enter a valid number of people";
      return;
    } else {
      emptyBill.textContent = "";
      emptyPeople.textContent = "";
      // Remove active class from every tip and add it to clicked tip
      tipAmounts.forEach((tip) => tip.classList.remove("active"));
      tip.classList.add("active");
      tipAmount = "00." + tip.textContent.slice(0, 2);

      tipPerPersonNumber = ((billAmount * tipAmount) / numOfPeople).toFixed(2);

      tipPerPerson.textContent = "$" + tipPerPersonNumber;

      totalPerPersonNumber = (
        (tipPerPersonNumber * numOfPeople + +billAmount) /
        numOfPeople
      ).toFixed(2);

      totalPerPerson.textContent = "$" + totalPerPersonNumber;
    }
  });
});
