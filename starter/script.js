'use strict';
let secreteNumber = Math.trunc(Math.random()*20)+1

let score=5
let highscore = 0
document.querySelector(".check").addEventListener
('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent ='⛔ No number!';
    }
    else if (guess === secreteNumber){
        document.querySelector('.message').textContent = 
        '🎉 Correct Number !'
        document.querySelector('.number').textContent=secreteNumber
        document.querySelector('body').style.backgroundColor = 'rgb(0, 230, 0)'

        document.querySelector('.number').style.width = '30rem'
        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent=highscore
        }
    }

    else if (guess > secreteNumber){

        if(score>1){

        document.querySelector('.message').textContent = 
        '📈 Too high !'
        score--
        document.querySelector('.score').textContent = 
        score
        document.querySelector('body').style.backgroundColor = 'rgb(252, 0, 0)'
    }
        else{

            document.querySelector('.message').textContent = 
        '💥 You lost the game!'
        
        document.querySelector('.score').textContent = 
        0

        }
    }

    
    else if (guess < secreteNumber){

        if(score>1){
        document.querySelector('.message').textContent = 
        '📉 Too low !'
        score--
        document.querySelector('.score').textContent = 
        score
        document.querySelector('body').style.backgroundColor = 'rgba(0, 162, 255, 0.63)'
    }

        else{
            document.querySelector('.message').textContent = 
        '💥 You lost the game!'
        document.querySelector('.score').textContent = 
        0
        }
    }
})


document.querySelector('.again').addEventListener
('click', function(){
    score = 20
    secreteNumber = Math.trunc(Math.random()*20)+1

    document.querySelector('.message').textContent = 
    'Start guessing...'
    document.querySelector('.score').textContent = 
    score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'

        document.querySelector('.number').style.width = '15rem'

})
