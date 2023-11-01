function validarForm() {
    var nome = document.forms["meuForm"]["nome"].value;
    var email = document.forms["meuForm"]["email"].value;
    var comentario = document.forms["meuForm"]["comentario"].value;
    var pesquisa = document.forms["meuForm"]["pesquisa"].value;

    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("O email deve conter '@' e '.'.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (pesquisa === "") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }
}