"use strict";

const billInput = document.querySelector(".bill-input");
const emptyBill = document.querySelector(".empty-bill");
const tipAmounts = document.querySelectorAll(".tip");
const numOfPeopleInput = document.querySelector(".people-input");
const emptyPeople = document.querySelector(".empty-people");
const tipPerPerson = document.querySelector(".tip-amount-person");
const totalPerPerson = document.querySelector(".total-amount-person");
const customTipInput = document.querySelector(".custom-tip");
const emptyCustomTip = document.querySelector(".empty-custom-tip");
const resetBtn = document.querySelector(".reset-btn");

let tipAmount;
let customTipAmount;
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

// Update value of customTipAmount when billInput changes
customTipInput.addEventListener("input", () => {
  // Only update value if customTipInput value is a number
  if (isNaN(customTipInput.value) || customTipInput.value === "0") {
    emptyCustomTip.textContent = "Enter an amount";
    return;
  } else {
    customTipAmount = "." + customTipInput.value;
    emptyCustomTip.textContent = "";
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

      // If custom input selected START
      if (tip.id === "5") {
        if (!customTipAmount) {
          emptyCustomTip.textContent = "Enter an amount";
          return;
        }
        tipAmount = customTipAmount;
        // If custom input selected END
      } else {
        // Remove active class from every tip and add it to clicked tip
        tipAmounts.forEach((tip) => tip.classList.remove("active"));
        tip.classList.add("active");
        tipAmount = "." + tip.textContent.slice(0, -1);
      }

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

// Clear all values
resetBtn.addEventListener("click", () => {
  tipAmount = "";
  customTipAmount = "";
  billAmount = "";
  numOfPeople = "";
  tipPerPersonNumber = "";
  totalPerPersonNumber = "";
  totalPerPerson.textContent = "$00.00";
  tipPerPerson.textContent = "$00.00";
  billInput.value = "";
  numOfPeopleInput.value = "";
  customTipInput.value = "";
  emptyBill.textContent - "";
  emptyPeople.textContent - "";
  emptyCustomTip.textContent - "";
  tipAmounts.forEach((tip) => tip.classList.remove("active"));
});
