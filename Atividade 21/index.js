function criarObjeto() {
   
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var matriculado = document.querySelector('input[name="matriculado"]:checked').value;
    var endereco = document.getElementById("endereco").value;

   
    var idade = calcularIdade(dataNascimento);
    var estaInscrito = (idade >= 7 && idade <= 17 && matriculado === "sim");

 
    var objetoInscricao = {
        nome: nome,
        dataNascimento: dataNascimento,
        matriculado: matriculado,
        endereco: endereco
    };

  
    var mensagem = `${objetoInscricao.nome} - ${objetoInscricao.dataNascimento} - ${objetoInscricao.endereco} - ${estaInscrito ? "está inscrito" : "NÃO está inscrito porque não atende aos requisitos."}`;
    alert(mensagem);
}

function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nascimento.getFullYear();


    if (hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}
