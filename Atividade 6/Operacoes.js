var Num1
var Num2

function Num() {
    
    Num1 = prompt("Digite um número")
    Num2 = prompt("Digite um número")
}

alert(Num());


Adciao = parseFloat(Num1) + parseFloat(Num2)

Sub = parseFloat(Num1) - parseFloat(Num2)

Multi = parseFloat(Num1) * parseFloat(Num2)

Div = parseFloat(Num1) / parseFloat(Num2)

res = parseFloat(Num1) % parseFloat(Num2)

alert("Adição: " + Adciao +"/n"+ "Subtração: " + Sub+"/n"+ + "Multiplicação: " + Multi+"/n"+  + "Divisão: " + Div+"/n"+ "resto: " + res  )