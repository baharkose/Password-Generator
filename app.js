// Expected Outcome
// password length must be equal to 10
// there should be 3 numbers
// and there should 2 symbols from below:
//  !@#$%^&*()\_+~|}{[]:;?><,./-=
// excluding single and double quotes
// there should be minimum 1 lower and 1 upper case letters,


const displayResult = document.getElementById("display-result")
const createBtn = document.querySelector(".create")

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
            let password = []
            let countNumber = 0;
            let countSymbols = 0;
            // let counter = 10;

    
    while (countNumber < 3 || countSymbols < 2 || password.length < 10){
    
            // for (let i = 0; i <=10; i++){

            

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
            
                    if(randomChoice === 0 && countSymbols < 2 && password.length<10) {
                        countSymbols++
                        password.push(...filtered)
                    }

                    else if (randomChoice === 1 && countNumber < 3 && password.length<10){
                        countNumber++
                        password.push(...filtered)

                    }
                    
                    else if (randomChoice === 2 && password.length < 10){
                        password.push(...filtered)

                }
            
                    
                // }
            

    }  
    

    

        
    console.log(`the password contains ${countNumber} times number `)
    console.log(`the password contains ${countSymbols} times symbol `)
    console.log(password);
    passwordText = password.join('');
    console.log(passwordText);
    displayResult.textContent = passwordText;
    // displayResult.textContent = passwordText;
    
   
});


const control = () =>{
    // numberları say
    // sembolleri say
    // büyük küçük harf say
    // bunlar gerçekleşmediyse tekrar çalış
    const numberCondition = (value) =>{
        password.filter()
    }
}







