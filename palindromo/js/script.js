var parola = prompt('Inserisci una parola:');

function reverseString(string) {

    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var stringReverse = reverseArray.join("");
    return stringReverse;
}

if (parola == reverseString(parola)){
  alert('La parola è palindroma!');
} else {
  alert('La parola non è palindroma!');
}
