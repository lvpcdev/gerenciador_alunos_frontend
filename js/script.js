// Função acionada quando o botão do HTML for clicado
async function buscarAlunos() {
    try {
        // A nossa conexão HTTP (telefone) ligando para a API em Java
        const resposta = await fetch('http://localhost:8080/alunos');
        
        // Convertendo os dados recebidos para o formato que o JavaScript entende
        const alunos = await resposta.json();
        
        const corpoTabela = document.getElementById('corpoTabela');
        corpoTabela.innerHTML = ''; // Limpa a tabela antes de inserir novos dados

        // Usando o for normal e indexado para percorrer a lista de alunos
        for (let i = 0; i < alunos.length; i++) {
            let aluno = alunos[i];
            
            // Monta as linhas da tabela injetando os dados do Java no meio do HTML
            let linha = `<tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.matricula}</td>
                <td>${aluno.cpf}</td>
            </tr>`;
            
            // Adiciona a linha construída no corpo da tabela
            corpoTabela.innerHTML += linha;
        }

    } catch (erro) {
        console.error("Erro ao buscar alunos:", erro);
        alert("Não foi possível conectar ao servidor. Verifique se o Back-end Java está rodando na porta 8080.");
    }
}