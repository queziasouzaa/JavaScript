function saudacao(nome) {
    nome = nome.trim();
    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    console.log(`Olá, ${nomeFormatado}, seja bem-vindo(a)!`);
}

saudacao("quéZIa");