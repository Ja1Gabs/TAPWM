function procura(texto) {
  
    var textoMinusculo = texto.toLowerCase();
    
    
    var quantidadeA = (textoMinusculo.match(/a/g) || []).length;

    console.log(`Quantidade de letras 'A' encontradas: ${quantidadeA}`);
}


procura("Esta é uma Amostra de Texto com Algumas letras A.");
