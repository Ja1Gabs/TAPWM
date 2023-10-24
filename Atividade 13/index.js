function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
  
    this.calcularArea = function() {
      return this.base * this.altura;
    };
  }
  
  document.getElementById("calcularButton").addEventListener("click", function() {
    var base = parseFloat(prompt("Digite a base do retângulo:"));
    var altura = parseFloat(prompt("Digite a altura do retângulo:"));
  
    var meuRetangulo = new Retangulo(base, altura);
  
    var area = meuRetangulo.calcularArea();
  
    alert("A área do retângulo é: " + area);
  });
  