function dueloDeDados(escolhaJogador1, escolhaJogador2) {
    let sorteado1 = Math.floor(Math.random() * 6) + 1;
    let sorteado2 = Math.floor(Math.random() * 6) + 1;

    console.log(`Jogador 1 escolheu ${escolhaJogador1}, sorteou ${sorteado1}`);
    console.log(`Jogador 2 escolheu ${escolhaJogador2}, sorteou ${sorteado2}`);

    let diferenca1 = Math.abs(sorteado1 - escolhaJogador1);
    let diferenca2 = Math.abs(sorteado2 - escolhaJogador2);

    if (diferenca1 < diferenca2) {
        console.log("Jogador 1 venceu!");
    } else if (diferenca2 < diferenca1) {
        console.log("Jogador 2 venceu!");
    } else {
        console.log("Empate!");
    }
}

dueloDeDados(2, 5);
