/*
Assignment 2: Javascript
Code base by https://github.com/developedbyed || Edited and Finalized by me
*/

const game = () => {
  let pScore = 0;
  let cScore = 0;
  let gamelog = [];

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    gameloglast = gamelog.slice(Math.max(gamelog.length - 3, 0)); // Getting the last 3 elements of the array
    const allEqual = arr => arr.every( v => v === arr[0] ); // One-line function to check for equal elements of the array
    if (allEqual(gameloglast) == 'true'){ // Elements ARE equal
      if (gameloglast[0] == 'win'){ // Checking if the player won
        alert('You won! Reload the page if you want to play again :) ')
      } else {
        alert('You lost... Reload the page if you want to play again! ')
      };
    };

    if (pScore == 10){ // Total 10 points
      console.log('Player has won');
      alert('You won! Reload the page if you want to play again :) ')
    }
    if (cScore == 10){
      console.log('Computer won');
      alert('You lost... Reload the page if you want to play again! ')
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        gamelog.push("win");
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        gamelog.push("loss");
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        gamelog.push("loss");
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        gamelog.push("win");
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        gamelog.push("loss");
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        gamelog.push("win");
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
