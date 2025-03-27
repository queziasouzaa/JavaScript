function definirSenha(obj, senha) {
    Object.defineProperty(obj, 'senha', {
        value: senha,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

let usuario = { nome: "Carlos" };
definirSenha(usuario, "12345");

console.log(usuario.senha);
usuario.senha = "novaSenha";
console.log(usuario.senha);
console.log(Object.keys(usuario));