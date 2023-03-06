/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

function convertValue(inputValue, conversionFactor) {
  return inputValue * conversionFactor;
}

buttonEl.addEventListener("click", function () {
  const inputValue = inputEl.value;

  if (isNaN(inputValue) || inputValue === "") {
    alert("Please enter a valid number");
    return;
  }

  const valueFeet = convertValue(inputValue, 3.281);
  const valueMeters = convertValue(inputValue, 0.305);

  const valueLiters = convertValue(inputValue, 3.785);
  const valueGallons = convertValue(inputValue, 0.264);

  const valuePounds = convertValue(inputValue, 2.204);
  const valueKg = convertValue(inputValue, 0.453);

  lengthEl.textContent = `${inputValue} meters = ${valueFeet.toFixed(
    3
  )} feet  |  ${inputValue} feet = ${valueMeters.toFixed(3)} meters`;

  volumeEl.textContent = `${inputValue} liters = ${valueGallons.toFixed(
    3
  )} gallons  |  ${inputValue} gallons = ${valueLiters.toFixed(3)} liters`;

  massEl.textContent = `${inputValue} kilograms = ${valuePounds.toFixed(
    3
  )} pounds  |  ${inputValue} pounds = ${valueKg.toFixed(3)} kilograms`;
});
