// Expected Outcome
// password length must be equal to 10
// there should be 3 numbers
// and there should 2 symbols from below:
//  !@#$%^&*()\_+~|}{[]:;?><,./-=
// excluding single and double quotes
// there should be minimum 1 lower and 1 upper case letters,


const displayResult = document.getElementById("display-result")
const createBtn = document.getElementById("display-result")

const sembol = `!@#$%^&*()\\_+~|}{[]:;?><,./-=`;
let symbols = sembol.split("") 

console.log(symbols[symbols.length - 1]);
const number = ["0","1","2","3","4","5","6","7","8","9"]// create between 0 and 9
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const common = [symbols, number, alphabets]
console.log(common);

console.log(number);

console.log(symbols);

let password = []
createBtn.addEventListener("click", ()=>{
    password = []
    for(let i = 1; i<=10; i++){

        let randomChoice = Math.floor(Math.random()*3);
        // choice random one of the arrays

        let choicen = common[randomChoice]

        // take a list one of them
        console.log(choicen);

        // create a random number smaller than choicen list length
        let randomLength = Math.floor(Math.random()*choicen.length);
        
        console.log(randomLength);
        let filtered = choicen.filter((item, index) => index === randomLength);

        console.log(filtered);

        password.push(...filtered)
      
    }
    console.log(password);
    passwordText = password.join('');
    console.log(passwordText);
   
});







