
function encontrarMaiorNumero(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
  }
  

  function ordenarNumerosCrescente(num1, num2, num3, num4) {
    const numeros = [num1, num2, num3, num4];
    numeros.sort((a, b) => a - b);
    return numeros;
  }
  

  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  const num3 = parseFloat(prompt("Digite o terceiro número:"));
  const num4 = parseFloat(prompt("Digite o quarto número:"));
  

  const maiorNumero = encontrarMaiorNumero(num1, num2, num3, num4);
  const numerosOrdenados = ordenarNumerosCrescente(num1, num2, num3, num4);
  

  alert(`O maior número é: ${maiorNumero}`);
  alert(`Os números em ordem crescente são: ${numerosOrdenados}`);
  