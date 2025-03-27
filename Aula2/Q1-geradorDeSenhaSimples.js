function gerarSenha(palavra) {
    return palavra.trim()
                 .replace(/a/g, "@")
                 .replace(/i/g, "!")
                 .replace(/o/g, "0");
}

let senha = gerarSenha(" minha senha ");
console.log(senha)
