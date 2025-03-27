function calcularMedia(notas) {
    notas.sort((a, b) => b - a);
    let melhoresNotas = notas.slice(0, 3);
    let media = melhoresNotas.reduce((acc, nota) => acc + nota, 0) / 3;
    return media;
}

const notas = [5, 9, 10, 7, 8];
console.log(calcularMedia(notas));