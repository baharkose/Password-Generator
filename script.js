const displayResult = document.getElementById("display-result");
const createBtn = document.querySelector(".create");

const symbols = "!@#$%^&*()\\_+~|}{[]:;?><,./-=";
const numbers = "0123456789";
const alphabets = "abcdefghijklmnopqrstuvwxyz";


createBtn.addEventListener("click", () => {

  let password = [];
  let countNumbers = 0;
  let countSymbols = 0;

  while ((password.length < 10) && ((countNumbers < 2) || (countSymbols < 3))) {
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
        
});
