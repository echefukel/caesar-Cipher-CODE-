const btn = document.getElementById('btn');
const display = document.getElementById('display');
const input = document.querySelector('input');

// Getting the array of Alphabets 
const alphabet = ["A", "B", "C", "D","E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]




// creating a function that actually does the rotation for the cipher
const rotate13 = (str) =>{
    
   let decoded = ''
// Lets loop through string to be rotated


for(let i =0;i<str.length;i++){
    const isALetter = alphabet.includes(str[i]);
    const char = alphabet.findIndex((letter) => letter === str[i])
// check if there is space or any nonletter character in the cipher
if(isALetter === false){
    decoded += str[i]
    display.textContent = decoded

} else{
    // decoded += alphabet[]
    decoded += alphabet[char + 13] || alphabet[char-13]
    display.textContent = decoded
}

}
}

// implement caesar cipher on screen

const implement = ()=>{
    let inputValue = input.value.toUpperCase();

        
    rotate13(inputValue);
    

}



// add event listener to our buttto
btn.addEventListener('click',implement);

