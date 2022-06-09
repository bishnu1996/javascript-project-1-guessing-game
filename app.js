const btn = document.getElementById('btn');
console.log(btn);
const outPut = document.getElementById('outPut');

const randNumber = Math.floor((Math.random() * 100)+1);
console.log(randNumber);
let guess = 1;

btn.addEventListener('click',function(){
    const input = document.getElementById('input').value.trim();
    if(randNumber == input){
        outPut.innerHTML = `congratulations you guess the number ${input} in number of guesses is ${guess}`;
    }else if(randNumber > input){
        guess++;
        outPut.innerHTML = "Enter to low number";
    }else if(randNumber < input){
        guess++
        outPut.innerHTML = "Enter to high number";
    }
});