(() => {
  let gameNumber, totalNumber
  let crystals = {}
  let wins = 0;
  let losses = 0;
  let win = document.getElementById('win');
  let loss = document.getElementById('loss');

  const resetNumber = (seed, modifier) => Math.floor(Math.random() * seed) + modifier;

  const setGameNumber = () => document.getElementById('game-number').innerHTML = gameNumber;

  const setTotalNumber = () => document.getElementById('total-number').innerHTML = totalNumber;

  const setScorebox = () => {
    document.getElementById("wins").innerHTML = `${wins} Wins`;
    document.getElementById("losses").innerHTML = `${losses} Losses`;
  };

  const startGame = () => {
    gameNumber = resetNumber(108, 12);
    totalNumber = 0;
    crystals["1"] = resetNumber(11, 1);
    crystals["2"] = resetNumber(11, 1);
    crystals["3"] = resetNumber(11, 1);
    crystals["4"] = resetNumber(11, 1);
    setScorebox();
    setGameNumber();
    setTotalNumber();
  };

  const debugLog = () => {
    console.log("Crystals: ", crystals);
  };

  const toggleAlerts = () => {
    if (win.style.display !== 'none') {
      win.style.display = "none";
    }

    if (loss.style.display !== 'none') {
      loss.style.display = "none";
    }
  };

  const updateTotal = (id) => {
    toggleAlerts();
    totalNumber += crystals[id];
    setTotalNumber();
    if (totalNumber > gameNumber) {
      loss.style.display = "block";
      losses += 1;
      startGame();
    }

    if (totalNumber === gameNumber) {
      win.style.display = "block";
      wins += 1;
      startGame();
    }
  };

  toggleAlerts();
  startGame();
  debugLog();

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`crystal-${i}`).addEventListener("click", event => {
      updateTotal(i);
    });
  }
})();
