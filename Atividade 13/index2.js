function Conta(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }
  
  function ContaCorrenteSaldoEspecial(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;
  }
  
  function ContaPoupancaJuros(nomeCorrentista, banco, numeroConta, saldo, taxaJuros, dataVencimento) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.taxaJuros = taxaJuros;
    this.dataVencimento = dataVencimento;
  }
  
  document.getElementById("criarContasButton").addEventListener("click", function() {
    var contaCorrente = new ContaCorrenteSaldoEspecial("João", "Banco A", "12345", 1500, 500);
    var contaPoupanca = new ContaPoupancaJuros("Maria", "Banco B", "67890", 3000, 2.5, "30/11/2023");
  
    var contaDetails = document.getElementById("contaDetails");
    contaDetails.innerHTML = "Dados da Conta Corrente com Saldo Especial:<br>";
    contaDetails.innerHTML += "Nome do Correntista: " + contaCorrente.nomeCorrentista + "<br>";
    contaDetails.innerHTML += "Banco: " + contaCorrente.banco + "<br>";
    contaDetails.innerHTML += "Número da Conta: " + contaCorrente.numeroConta + "<br>";
    contaDetails.innerHTML += "Saldo: R$" + contaCorrente.saldo.toFixed(2) + "<br>";
    contaDetails.innerHTML += "Saldo Especial: R$" + contaCorrente.saldoEspecial.toFixed(2) + "<br>";
  
    contaDetails.innerHTML += "<br>Dados da Conta Poupança com Juros:<br>";
    contaDetails.innerHTML += "Nome do Correntista: " + contaPoupanca.nomeCorrentista + "<br>";
    contaDetails.innerHTML += "Banco: " + contaPoupanca.banco + "<br>";
    contaDetails.innerHTML += "Número da Conta: " + contaPoupanca.numeroConta + "<br>";
    contaDetails.innerHTML += "Saldo: R$" + contaPoupanca.saldo.toFixed(2) + "<br>";
    contaDetails.innerHTML += "Taxa de Juros: " + contaPoupanca.taxaJuros + "%<br>";
    contaDetails.innerHTML += "Data de Vencimento: " + contaPoupanca.dataVencimento;
  });
  