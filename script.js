const displayResult = document.getElementById("display-result");
const createBtn = document.getElementById("create-btn");

const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
const numbers = "0123456789";
const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

createBtn.addEventListener("click", generatePassword);

function generatePassword() {
    let password = '';
    let countNumbers = 0;
    let countSymbols = 0;

    while (password.length < 10 || countNumbers < 3 || countSymbols < 2) {
        let randomChoice = Math.floor(Math.random() * 3);

        if (randomChoice === 0 && countSymbols < 2) {
            password += getRandomCharacter(symbols);
            countSymbols++;
        } else if (randomChoice === 1 && countNumbers < 3) {
            password += getRandomCharacter(numbers);
            countNumbers++;
        } else if (randomChoice === 2) {
            password += getRandomCharacter(alphabets);
        }
    }

    console.log(`Password: ${password}`);
    displayResult.textContent = password;
}

function getRandomCharacter(characterSet) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet[randomIndex];
}
