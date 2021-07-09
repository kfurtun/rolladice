function LetsRoll() {
  let input = document.getElementById("input").value;
  const output = parseFloat(input);
  rolling(output);

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

  // let elements = document.getElementsByClassName('asa');
  // for(let i =0; i<elements.length;i++){
  //   elements[i].style.display='none'
  // }
}

function rolling(output) {
  if (output > 5 || isNaN(output)) {
    //window.location.href = "index.html";
    // document.getElementById("container").style.display = "none";
    if (!document.getElementById("warning")) {
      const warning = document.createElement("div");
      warning.className = "warning";
      warning.id = "warning";
      warning.innerText = "Wrong input";
      document.body.appendChild(warning);
    }

    //return;
  } else {
    again();
    for (let i = 0; i < output; i++) {
      let dice1Value = Math.floor(Math.random() * 6) + 1;
      const dice = document.createElement("div");
      dice.className = "dice dice" + dice1Value;
      dice.id = "dice";
      document.getElementById("dices").appendChild(dice);
    }

    if (document.getElementById("warning")) {
      document.getElementById("warning").style.display = "none";
    }
    hideContent();
  }
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
