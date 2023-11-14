const displayResult = document.getElementById("display-result")
const createBtn = document.querySelector(".create")

let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = lowerCase.toUpperCase();
    let symbols = "!@#$%^&*()\\_+~|}{[]:;?><,./-="
    let numbers = "0123456789"
    
    let upperCaseE = upperCase.split("")
    let lowerCaseE = lowerCase.split("")
    let symbolsE = symbols.split("")
    let numbersE = numbers.split("")

    let allOfThem = [...upperCaseE,...lowerCaseE,...symbols]
    console.log(allOfThem);



const createPassword = () =>{
    let password = [];
    for(let i=0; i<3; i++){
        let randomN=numbersE[Math.floor(Math.random()*numbersE.length)]
            sıfre.push(randomN)
            // console.log(sıfre);
          }
        for (let i=3; i<5; i++) {
          let randomS=sembolsE[Math.floor(Math.random()*sembolsE.length)]
         sıfre.push(randomS)
          // console.log(sıfre);
        }
        for (let i=5; i<6; i++) {
          let randomuppercaseE=uppercaseE[Math.floor(Math.random()*uppercaseE.length)]
         sıfre.push(randomuppercaseE)
          console.log(sıfre);
        }
        for (let i=6; i<7; i++) {
          let randomlowercaseE=lowercaseE[Math.floor(Math.random()*lowercaseE.length)]
         sıfre.push(randomlowercaseE)
          console.log(sıfre);
        }
        for (let i=7; i<10; i++) {
          let randomeverything=everything[Math.floor(Math.random()*everything.length)]
         sıfre.push(randomeverything)
          console.log(sıfre);
        }
        for (let i=0; i<sıfre.length; i++) {
          let randomSec=sıfre[Math.floor(Math.random()*sıfre.length)]
          newpass.push(randomSec)
        }
        let newpassword=newpass.join().replace(/,/g,"")
        console.log(newpassword);
    
    }

createPassword()