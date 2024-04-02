
// Score Board
let ties = 0
let wins = 0
let losses = 0
let rock = 0
let papper = 0
let scissors = 0


// Game Counting for Score
function playGame() {
  const choices = ["R", "P", "S"];





  // Playing the Game 

  const start = prompt("Choose R, P, S");
  if (start === 'R') {
    rock++
  } else if (start === 'S') {
    scissors++
  } else if (start === 'P') {
    papper++
  }
  if (choices.includes(start)) {
    alert(`You Chose: ${start}!`);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    alert(`Computer chose ${computerChoice}!`);
    if (start === computerChoice) {
      alert("You Tie");
      ties++
    } else if (start === "R" && computerChoice === "P") {
      alert("You Lose");
      losses++
    } else if (start === "R" && computerChoice === "S") {
      alert("You Win");
      wins++
    } else if (start === "P" && computerChoice === "R") {
      alert("You Win");
      wins++
    } else if (start === "P" && computerChoice === "S") {
      alert("You Lose");
      losses++
    } else if (start === "S" && computerChoice === "R") {
      alert("You Lose");
      losses++
    } else if (start === "S" && computerChoice === "P") {
      alert("You Win");
      wins++
    }


    // If the player wants to play again, 
    const playAgain = confirm("Play Again?")
    if (playAgain) {
      playGame()
    } else {
      alert(`Ties: ${ties} Wins: ${wins} Losses ${losses}`)
      alert(`Rock: ${rock} Papper: ${papper} Scissors: ${scissors}`)
    }
  }
}

playGame()