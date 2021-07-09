function LetsRoll() {
  let input = document.getElementById("input").value;
  const output = parseFloat(input);
  rolling(output);
  hideContent();

  gtag("event", "roll");
}

function oneDice() {
  let dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice = document.createElement("div");
  dice.className = "dice dice" + dice1Value;
  dice.id = "dice";
  document.getElementById("dices").appendChild(dice);
  hideContent();
  again();
}

function twoDices() {
  let dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice1 = document.createElement("div");
  dice1.className = "dice dice" + dice1Value;
  document.getElementById("dices").appendChild(dice1);

  let dice2Value = Math.floor(Math.random() * 6) + 1;
  const dice2 = document.createElement("div");
  dice2.className = "dice dice" + dice2Value;
  document.getElementById("dices").appendChild(dice2);
  hideContent();
  again();
}

function hideContent() {
  document.getElementById("header").style.display = "none";
  document.getElementById("inputDiv").style.display = "none";
  document.getElementById("oneDice").style.display = "none";
  document.getElementById("twoDices").style.display = "none";
}

function rolling(output) {
  for (let i = 0; i < output; i++) {
    let dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice = document.createElement("div");
    dice.className = "dice dice" + dice1Value;
    dice.id = "dice";
    document.getElementById("dices").appendChild(dice);
  }
  if (output > 5) {
    window.location.href = "index.html";
    document.getElementById("container").style.display = "none";
  }
  again();
}

function again() {
  const againButton = document.createElement("button");
  againButton.className = "againButton";
  againButton.id = "againButton";
  document.getElementById("container").appendChild(againButton);
  document.getElementById("againButton").innerText = "Roll again";
  document.getElementById("againButton").onclick = function () {
    window.location.href = "index.html";
  };
}
