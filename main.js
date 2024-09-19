// Array of colors used in the game

// Arrays to store the generated game pattern and user clicked pattern

// Game state variables?
// Variable that Indicates if the game has started
// Variable that Tracks the current level of the game

// Event listener to start the game on keypress
document.addEventListener("keypress", function() {
  // Check if the game hasn't started
  // Hint: use conditional statement
    // Update title to show current level
    // Call function to generate the first sequence
    // Set game as started
  
});

// Event listener for button clicks
var buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Get the clicked button's ID
    // Add the clicked color to the user's pattern
    // Play sound for the clicked button
    // Animate the button click
    // Check the user's answer
  });
});

// Function to check the user's answer against the game pattern
function checkAnswer(currentLevel) {
  // Check if the current user choice is correct
  if (/* condition to check correctness */) {
    // If user has completed their turn
    // Call function to generate next sequence after a delay
  } else {
    // If the answer is wrong
    // Play wrong sound
    // Update title to show game over
    // Reset the game
  }
}

// Function to generate the next sequence in the game
function nextSequence() {
  // Reset user clicked pattern for the new level
  // Increment level
  // Update title to show current level
  // Generate random index
  // Choose a random color from the array
  // Add the chosen color to the game pattern
  // Simulate button flash (fade in/out)
  // Play sound for the new color
}

// Function to animate button press
function animatePress(currentColor) {
  // Get the button element by color
  // Add pressed class for animation
  // Remove pressed class after a delay
}

// Function to play sound based on button pressed
function playSound(name) {
  // Create audio object with sound file path
  // Play the sound
}

// Function to reset the game variables
function startOver() {
  // Reset level
  // Clear game pattern
  // Set game as not started
}
