/* 
  What this app does:
  -------------------
  - Waits for the user to click the button
  - Picks a random compliment from a list
  - Displays the compliment inside the page
  - Adds a random image above the compliment to keep it fun
    (example image source: https://picsum.photos/600/400)
*/

// 1. Get the button and output area from the HTML
const complimentBtn = document.getElementById("complimentBtn");
const complimentOutput = document.querySelector("#complimentOutput");

// 2. Create a list of compliments to choose from
const compliments = [
  "You make ordinary moments more fun.",
  "You have a great eye for the little details.",
  "Your curiosity makes you interesting to talk to.",
  "You make people feel welcome.",
  "Your sense of humor is a gift.",
  "You ask questions that get people thinking.",
  "You have a style that’s entirely your own.",
  "You’re good at finding possibilities others miss.",
  "Your kindness comes through in small ways.",
  "You tell a great story.",
  "You’re someone people are happy to hear from.",
  "You bring a fresh perspective.",
  "You make complicated things easier to understand.",
  "Your enthusiasm is contagious.",
  "You deserve more credit than you give yourself."
];

// 3. Listen for a button click
let count = 0;
complimentBtn.addEventListener("click", () => {
  // 4. Pick a compliment at random
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // 5. Update the page with the compliment and a random image
  complimentOutput.innerHTML = `
  <p>${randomCompliment}</p>
  <img src="https://picsum.photos/600/400?${count++}" alt="Random inspirational image" class="compliment-image" />
  `;
});