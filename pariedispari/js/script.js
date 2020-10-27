NUM_MIN = 1;
NUM_MAX = 5;


userSelectEl = document.getElementById('userSelect');
userNumberEl = document.getElementById('userNumber');
btnAvviaEl = document.getElementById('btnAvvia');
numUserEl = document.getElementById('numUser');
numCpuEl = document.getElementById('numCpu');
resultEl = document.getElementById('result');


var numCpu = 0;
var somma = 0;

function numRandom(num1, num2){
   var numRandom = Math.floor(Math.random() * 5) + 1;
  return numRandom;
}

function isEven(number){
  var result = (number % 2 == 0);
  return result;
}

btnAvviaEl.addEventListener('click', function() {

  userNumber = parseInt(userNumberEl.value);
  userSelect = parseInt(userSelectEl.value);
  numCpu = numRandom(NUM_MIN, NUM_MAX);
  somma = userNumber + numCpu;*

  if (isEven(somma) == userSelect){
    resultEl.innerHTML = 'Hai Vinto!';
  } else {
    resultEl.innerHTML = 'Hai Perso!';
  }


});
