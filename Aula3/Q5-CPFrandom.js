function gerarCPF() {
    let cpf = "";

    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
        if (i === 2 || i === 5) cpf += ".";
    }

    cpf += "-";
    for (let i = 0; i < 2; i++) {
        cpf += Math.floor(Math.random() * 10);
    }

    return cpf;
}

console.log(gerarCPF());
