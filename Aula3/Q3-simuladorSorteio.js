function sorteio(min, max) {
    if (typeof min !== "number" || typeof max !== "number" || min >= max) {
        return "Erro: Intervalo inválido.";
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Teste
console.log(sorteio(1, 10));
console.log(sorteio(50, 100));