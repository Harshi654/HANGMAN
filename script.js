const fruitList = [
    {
      name: "apple",
      description: "A crisp, juicy fruit with a red or green skin."
    },
    {
      name: "banana",
      description: "A long, curved fruit with a yellow peel."
    },
    {
      name: "orange",
      description: "A round, citrus fruit with a bright orange color."
    },
    {
      name: "strawberry",
      description: "A small, red fruit with tiny seeds on the surface."
    },
    {
      name: "pineapple",
      description: "A tropical fruit with a spiky green exterior and sweet, yellow flesh."
    }
  ];
  const wordDisplay = document.querySelector('.word-display');
  const fruitDescription = document.querySelector('.fruit-description');
  const keyboardContainer = document.querySelector('.keyboard');
  const incorrectGuessesElement = document.querySelector('.incorrect-guesses');
  
  let selectedFruit;
  let incorrectGuesses = 0;
  let guessedLetters = [];
  let correctGuesses = [];
  
  function initializeGame() {
    selectedFruit = fruitList[Math.floor(Math.random() * fruitList.length)];
    displayWord();
    updateFruitDescription();
    createKeyboard();
  }
  
  function displayWord() {
    wordDisplay.innerHTML = selectedFruit.name.split('').map(letter => guessedLetters.includes(letter.toUpperCase()) ? letter : '_').join(' ');
  }
  
  function updateFruitDescription() {
    fruitDescription.textContent = selectedFruit.description;
  }
  
  function createKeyboard() {
    keyboardContainer.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      const button = document.createElement('button');
      button.textContent = letter;
      button.addEventListener('click', () => handleGuess(letter));
      keyboardContainer.appendChild(button);
    }
  }
  
  function handleGuess(letter) {
    if (guessedLetters.includes(letter.toUpperCase())) return;
    guessedLetters.push(letter.toUpperCase());
  
    if (!selectedFruit.name.toUpperCase().includes(letter.toUpperCase())) {
      incorrectGuesses++;
      incorrectGuessesElement.textContent = incorrectGuesses;
    } else {
      correctGuesses.push(letter.toUpperCase());
    }
  
    displayWord();
    checkGameStatus();
  }
  
  function checkGameStatus() {
    if (incorrectGuesses >= 6) {
      alert(`Game Over! The fruit was "${selectedFruit.name}".`);
      initializeGame();
    } else if (!wordDisplay.textContent.includes('_')) {
      alert('Congratulations, you guessed the fruit!');
      initializeGame();
    }
  }
  
  initializeGame();
  