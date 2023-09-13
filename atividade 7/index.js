var pedra = 1
var papel = 2
var tesoura = 3







   var escolha = prompt('pedra = 1, papel = 2 ou tesoura = 3')
   var escolhaAle = Math.floor((Math.random() * 3) + 1);
  

if (escolha == 1 && escolhaAle == 3)
 alert("pedra quebra tesoura")
 if (escolha == 3 && escolhaAle == 1)
 alert("pedra quebra tesoura")
 if (escolha == 2 && escolhaAle == 3)
alert("tesoura corta papel")
 if (escolha == 3 && escolhaAle == 2)
alert("tesoura corta papel")
 if (escolha == 2 && escolhaAle == 1)
alert("papel cobre pedra")
if (escolha == 1 && escolhaAle == 2)
alert("papel cobre pedra")
 if(escolha == 1 && escolhaAle == 1)
alert("Empate")
 if(escolha == 2 && escolhaAle == 2)
alert("Empate")
 if(escolha == 3 && escolhaAle == 3)
alert("Empate")


