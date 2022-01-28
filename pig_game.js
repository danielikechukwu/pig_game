var score, roundScore, activePlayer, gamePlaying;

// document.querySelector("#current--" + activePlayer).textContent = dice;

init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlaying) {
    //Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //Display result as a display from the viewed dice

    var diceDOM = document.querySelector(".dice");

    diceDOM.style.display = "block";

    diceDOM.src = "dice-" + dice + ".png";

    //Update the round score if the rolled number is greater than one

    if (dice !== 1) {
      //Add score
      roundScore += dice;

      // setTimeout(() => {

      //Giving a delay
      document.querySelector("#current--" + activePlayer).textContent =
        roundScore;
      // }, 1000)
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  //Add current score to global score
  //Update the UI
  //check if player won the game

  if(gamePlaying) {

    score[activePlayer] += roundScore;
    document.querySelector("#score--" + activePlayer).textContent =
      score[activePlayer];
  
    if (score[activePlayer] >= 20) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner 🎊!";
  
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector("#name--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector("#name--" + activePlayer)
        .classList.remove("player--active");
  
      gamePlaying = false;
    } else {
      nextPlayer();
    } 

  }

 
});

function nextPlayer() {
  //Next players turn
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  //when it happens set the roundScore to zero
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  //Removing and adding css class
  // document.querySelector(".player--0").classList.remove("player--active");
  // document.querySelector(".player--1").classList.add("player--active");

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";

  document.querySelector("#name--0").classList.remove("player--winner");
  document.querySelector("#name--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
}
