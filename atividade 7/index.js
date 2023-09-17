var pedra = 1;
var papel = 2;
var tesoura = 3;

var escolha = parseInt(prompt('Pedra = 1, Papel = 2 ou Tesoura = 3'));
var escolhaAle = Math.floor(Math.random() * 3) + 1;

if (escolha === 1 && escolhaAle === 3 || escolha === 3 && escolhaAle === 1) {
  alert("Pedra quebra Tesoura");
} else if (escolha === 2 && escolhaAle === 3 || escolha === 3 && escolhaAle === 2) {
  alert("Tesoura corta Papel");
} else if (escolha === 2 && escolhaAle === 1 || escolha === 1 && escolhaAle === 2) {
  alert("Papel cobre Pedra");
} else if (escolha === escolhaAle) {
  alert("Empate");
} else {
  alert("Escolha inválida! Por favor, escolha entre 1, 2 ou 3.");
}
