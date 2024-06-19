import car from './data.js';

// Get elements
const carImg = document.getElementById('car-img');
const carText = document.getElementById('car-text');
const background = document.querySelector('body');

// Initialize index to track current car
let currentCar = 0;

// Function to update car data
function updateCar() {
  const carData = car[currentCar];
  carImg.src = carData.img;
  background.backgroundImage = `url('${carData.img}')`
  carText.textContent = carData.text;
}

// Initial call to display the first car
updateCar();

// Function to show previous car
export function prevCar() {
  currentCar--;
  if (currentCar < 0) {
    currentCar = car.length - 1;
  }
  updateCar();
}

// Function to show next car
export function nextCar() {
  currentCar++;
  if (currentCar >= car.length) {
    currentCar = 0;
  }
  updateCar();
}
