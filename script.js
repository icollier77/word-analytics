const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordNumbersEl = document.querySelector('.stat__number--words');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');

const inputHandler = () => {
    // input validation
    if (textareaEl.value.includes('<script>')) {
        alert('You cannot use <script> in your text!');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }
    // determine the number of characters
    const numberOfChars = textareaEl.value.length;
    const twitterCharsLeft = 280 - numberOfChars;
    const facebookCharsLeft = 2200 - numberOfChars;
    // determine the number of words
    let numberOfWords = textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }
    // add visual indicator if limit is exceeded
    if (twitterCharsLeft < 0) {
        // twitterNumberEl.style.color = 'red'; // better to use a class and confine all style specifications to the css file
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit')
    };

    if (facebookCharsLeft < 0) {
        // twitterNumberEl.style.color = 'red'; // better to use a class and confine all style specifications to the css file
        facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit')
    };
    // display this number in the corresponding box
    charactersNumberEl.textContent = numberOfChars;
    wordNumbersEl.textContent = numberOfWords;
    twitterNumberEl.textContent = twitterCharsLeft;
    facebookNumberEl.textContent = facebookCharsLeft;
};

textareaEl.addEventListener('input', inputHandler);