var Aluno1 = new Object();
Aluno1.ra = "00001234";
Aluno1.nome = "Breno";
alert("Ra = " + Aluno1.ra + " nome = " + Aluno1.nome);

var Aluno2 = {};
Aluno2.ra = "1234";
Aluno12["nome"] = "kaylla";
alert("Ra = " + Aluno2.ra + " nome = " + Aluno2.nome);

var aluno3 = {
    ra: "1234567",
    nome: "Lucas"
};
alert("Ra = " + Aluno3.ra + " nome = " + Aluno3.nome); 

function Aluno(ra, nome) {

    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function (){
        return "Ra = " + this.ra + " nome = " + this.nome;
    }
}

var aluno4 = new Aluno("123", "Pedro");
alert(aluno4.MostraDados());

function Aluno2(){
    var ra;
    var nome;
    this.setRa = function (value) {
        this.ra = value;
    }
    this.getRa = function () {
        return this.ra;
    }
    this.setNome = function (value){
        this.nome = value;
    }
    this.getNome = function (){
        return this.nome
    }
}
var aluno5 = new Aluno2();
aluno5.setNome("Giovanna");
aluno5.setRa("234");
alert("ra = " + aluno5.getRa() + " nome = " + aluno5.getNome());