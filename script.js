const displayResult = document.getElementById("display-result");
const createBtn = document.querySelector(".create");
const refreshBtn = document.querySelector(".refresh")
const numberCheckbox = document.getElementById("number")
const symbolCheckbox = document.getElementById("symbol")


const symbols = "!@#$%^&*()\\_+~|}{[]:;?><,./-=";
const numbers = "0123456789";
const alphabets = "abcdefghijklmnopqrstuvwxyz";

const range = document.querySelector(".form-range")
console.log(range);

let defaultRange = Number(range.value);

//  FORM RANGE PROCESS
let selectedValue = 24;

document.addEventListener("DOMContentLoaded", function () {
    let defaultRange = Number(range.value);
    console.log(defaultRange);
    const rangeInput = document.getElementById("form-range");
    rangeInput.addEventListener("input", function () {
         selectedValue = rangeInput.value;
        console.log(selectedValue);


   
        });
});










createBtn.addEventListener("click", () => {
        
        createPassword();
});

refreshBtn.addEventListener("click", () => {
    createPassword();
})






function createPassword () {
            
        let password = [];
        let countNumbers = 0;
        let countSymbols = 0;
        

        while ((password.length < selectedValue) && ((countNumbers < 2) || (countSymbols < 3))) {
                let randomChoice = Math.floor(Math.random() * 3);
                let choice;

                if (randomChoice === 0 && countSymbols < 2) {

                        choice = symbols;
                        countSymbols++;

                } else if (randomChoice === 1 && countNumbers < 3) {

                        choice = numbers;
                        countNumbers++;

                } else {
                        choice = alphabets;
                        if (Math.round(Math.random())) {
                            choice = choice.toUpperCase();
                        }
                }

                let rastgeleIndex = Math.floor(Math.random() * choice.length);
                        password.push(choice[rastgeleIndex]);
                }

                console.log(`Şifre ${countNumbers} adet sayı içeriyor.`);
                console.log(`Şifre ${countSymbols} adet sembol içeriyor.`);
                console.log(password);



                displayResult.textContent = password.join('');

}
