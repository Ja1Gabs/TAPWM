function Limpar(){ 
   document.getElementById("nome").value = "";
   document.getElementById("altura").value = "";
   document.getElementById("peso").value = "";
}




function imc() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var nome = document.getElementById("nome").value;    
    var m = peso / altura * altura;
  
   m = Math.round(m, 1)
        if (m < 18.50){
            var i = 'Magreza';
        } else if (m > 18.50 && m < 24.99) {
            var i = 'Normal';
        } else if (m > 25 && m < 29.99) {
            var i = 'Sobrepeso';
        } else if (m > 30 && m < 39.99) {
            var i = 'Obesidade';
        } 
         else if (m > 40) {
            var i = 'Obesidade morbida';
        }
         alert(nome + " possui indice de massa corporal igual a " + m + " sendo classificado como " + i);
            //document.getElementById("resposta").innerHtml = res;

        }