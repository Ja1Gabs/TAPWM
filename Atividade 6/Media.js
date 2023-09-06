var n1
var n2
var n3
var Nome
var Media

function Media() {
    Nome = prompt('Nome')
    n1 = prompt('nota 1')
    n2 = prompt('nota 2')
    n3 = prompt('nota 3')
}

alert(Media())

Media = (parseFloat(n1) + 
        parseFloat(n2) +
        parseFloat(n3))/3;

alert(Nome + " Sua média final é" + Media)



