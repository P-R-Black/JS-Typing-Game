    window.addEventListener('load', init);
    /// Global Variables

    // Available Levels
    const levels = {
    easy: 5,
    medium: 3,
    hard: 2
    };

    /// To change level
    const currentLevel = levels.easy;


    let time = currentLevel;
    let score = 0;
    let isPlaying;

    // Dom Elements
    const wordInput = document.querySelector('#word-input');
    const currentWord = document.querySelector('#current-word');
    const scoreDisplay = document.querySelector('#score');
    const timeDisplay = document.querySelector('#time');
    const message = document.querySelector('#message');
    const seconds = document.querySelector('#seconds');

    const words = [
    'hat', 'river', 'lucky', 'statue', 'generate', 'stubborn', 'cocktail', 'runway', 'joke', 'developer', 'establishment',
    'hero', 'javascript', 'python', 'revolver', 'echo', 'siblings', 'investigate', 'horrendous', 'symptom', 'laughter',
    'magic', 'master', 'space', 'definition', 'spice', 'language', 'programming', 'coding', 'learning', 'fun'
    ];

    // Initialize Game
    function init(){
    // Show Number of Seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start Matching on Word Input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
    }

    // Start Match
    function startMatch(){
        if(matchWords()) {
           isPlaying = true;
           time = currentLevel + 1;
           showWord(words);
           wordInput.value ='';
           score++;
        }

        // If score is - 1 display 0
        if(score === -1) {
        scoreDisplay.innerHTML = 0;
        } else {
        scoreDisplay.innerHTML = score;
        }
    }

    // Match CurrentWord to WordInput
    function matchWords(){
        if(wordInput.value === currentWord.innerHTML) {
            message.innerHTML = "Correct!!!";
                return true;
            } else {
                message.innerHTML = '';
                return false;
            }
    }

    // Pick and Show Random Word
    function showWord(words){
    // Generate random array index
        const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
        currentWord.innerHTML = words[randIndex];
    }

    // Countdown timer
    function countdown() {
        // Make sure ime has not run out
        if(time > 0){
            // Decrement time
            time--;
        } else if(time === 0) {
            // Game is over
            isPlaying = false;
        }
        // Show time
        timeDisplay.innerHTML = time;
    }

    // Check Game Status
    function checkStatus() {
        if(!isPlaying && time === 0) {
            message.innerHTML = "Game Over!!!";
            score = -1;
        }
    }