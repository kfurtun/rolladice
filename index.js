function rollDice() {
  let dice1Value = Math.floor(Math.random() * 6) + 1;
  let dice2Value = Math.floor(Math.random() * 6) + 1;

  document.getElementById("firstDice").className = "dice dice" + dice1Value;
  document.getElementById("secondDice").className = "dice dice" + dice2Value;

  ga('send', 'event', 'dice', 'roll');
}
