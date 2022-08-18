//first cube

let random_function = Math.floor(Math.random() * 6 ) + 1; //random_function
let img_random = 'dice/die' + random_function + '.png'; //random die1 - die6

document.querySelectorAll('img')[0].setAttribute('src' , img_random);

//second cube

let random_function_s = Math.floor(Math.random() * 6 ) + 1; //random_function for the second cube
let img_random_s = 'dice/die' + random_function_s + '.png'; //random die1 - die6 for the second cube

document.querySelectorAll('img')[1].setAttribute('src' , img_random_s);//select img and attribute src with random


//what's next if the player won another player

if (img_random > img_random_s){
    document.querySelector('h1').innerHTML = 'Player 1 wins✨';
}

else if (img_random < img_random_s){
    document.querySelector('h1').innerHTML = 'Player 2 wins⭐';
}

else{
    document.querySelector('h1').innerHTML = 'Draw💫';
}