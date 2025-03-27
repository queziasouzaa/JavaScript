function jogoAdivinhacao() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let chute;

    while (chute !== numeroSecreto) {
        chute = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
        tentativas++;

        if (chute > numeroSecreto) {
            console.log("Muito alto! Tente um número menor.");
        } else if (chute < numeroSecreto) {
            console.log("Muito baixo! Tente um número maior.");
        }
    }

    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
}

jogoAdivinhacao();
