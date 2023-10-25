const janela = document.getElementById('janela');
const h1 = document.querySelector('h1');


function abrirJanela() {
    janela.src = 'janela_aberta.png';
    h1.textContent = 'Janela Aberta';
}

function fecharJanela() {
    janela.src = 'janela_fechada.png';
    h1.textContent = 'Janela Fechada';
}

function quebrarJanela() {
    janela.src = 'janela_quebrada.png';
    h1.textContent = 'Janela Quebrada';
}


janela.addEventListener('mouseover', abrirJanela);
janela.addEventListener('mouseout', fecharJanela);
janela.addEventListener('click', quebrarJanela);
