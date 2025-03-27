function rolarDado(escolhaUsuario) {
    let numeroSorteado = Math.floor(Math.random() * 6) + 1;
    if (escolhaUsuario === numeroSorteado) {
        console.log("Parabéns, você acertou!");
    } else {
        console.log(`Que pena, o número sorteado foi ${numeroSorteado}`);
    }
}

rolarDado(3);
