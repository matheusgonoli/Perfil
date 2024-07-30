function mostrarAba(abaId) {
    // Esconde todas as abas
    var abas = document.getElementsByClassName('aba-conteudo');
    for (var i = 0; i < abas.length; i++) {
        abas[i].classList.remove('ativa');
    }

    // Mostra a aba selecionada com efeito
    var abaSelecionada = document.getElementById(abaId);
    abaSelecionada.classList.add('ativa');
}
