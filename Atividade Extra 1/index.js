function calcularSomaQuadrados(num1, num2, num3) {
    const soma = num1 + num2 + num3;
    const quadradoNum1 = num1 * num1;
    const quadradoNum2 = num2 * num2;
  
    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoNum1} e o quadrado do segundo é: ${quadradoNum2}`;
  }
  
  const numeros = [];
  
  for (let i = 0; i < 3; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
  }
  
  const resultado = calcularSomaQuadrados.apply(null, numeros);
  alert(resultado);
  