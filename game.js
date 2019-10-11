let randomNumber = Math.floor(Math.random()*100)
let count = 0;

function difference(a, b){
  return Math.abs(a - b);
}


function recordClicks(){


count = count + 1;
document.getElementById('recordClicks').innerHTML = `<h4>Number of Guesses: ${count}</h4>`

let userNumber = document.getElementById('number').value;

if(difference(randomNumber, userNumber) == 0){
  document.getElementById('closeness').innerHTML = `<h4>Congratulations! You got it!</h4>`
}

if(difference(randomNumber, userNumber) >= 50){
  document.getElementById('closeness').innerHTML = `<h4>Closeness Zone: Freezing</h4>`
}

if(difference(randomNumber, userNumber) >= 20 && difference(randomNumber, userNumber) <= 49){
  document.getElementById('closeness').innerHTML = `<h4>Closeness Zone: Cold</h4>`
}

if(difference(randomNumber, userNumber) >= 10 && difference(randomNumber, userNumber) <= 19){
  document.getElementById('closeness').innerHTML = `<h4>Closeness Zone: Warm</h4>`
}

if(difference(randomNumber, userNumber) >= 5 && difference(randomNumber, userNumber) <= 9){
  document.getElementById('closeness').innerHTML = `<h4>Closeness Zone: Hot</h4>`
}

if(difference(randomNumber, userNumber) <= 4 && difference(randomNumber, userNumber) >= 1){
  document.getElementById('closeness').innerHTML = `<h4>Closeness Zone: Boiling</h4>`
}

}


function reset(){
  count = 0
  randomNumber = Math.floor(Math.random()*100)

  if (randomNumber){
    console.log(randomNumber)
    randomNumber = randomNumber
  }

  document.getElementById('recordClicks').innerHTML = `<h4>Number of Guesses: ${count} </h4>`


}
