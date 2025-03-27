function gerenciarTarefas(lista, acao, tarefa = "") {
    if (acao === "adicionarInicio") {
        lista.unshift(tarefa);
    } else if (acao === "adicionarFim") {
        lista.push(tarefa);
    } else if (acao === "removerInicio") {
        lista.shift();
    } else if (acao === "removerFim") {
        lista.pop();
    }
    return lista;
}

const tarefas = ["Estudar", "Trabalhar"];
console.log(gerenciarTarefas(tarefas, "adicionarFim", "Jogar"));