function calcularMedia(notas) {
    let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    return media;
}

function acimaMedia(notas) {
    let media = calcularMedia(notas);
    return notas.filter(nota => nota > media);
}

const notasAluno = [8, 7, 10, 9, 5];
console.log(acimaMedia(notasAluno));
