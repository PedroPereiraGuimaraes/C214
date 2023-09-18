## PRIMEIRO TRABALHO DE C214-LAB 🚀
Você foi contratado como desenvolvedor de software para criarum sistemade gerenciamentode tarefas usando JavaScript. 
O sistema deve permitir que os usuários criem, visualizem, atualizem e excluam tarefas.
Cada tarefa deve ter um título, uma descrição e um status (por exemplo, "A fazer", "Em andamento" ou "Concluída").

### FEITO POR 
```
Pedro Pereira Guimarães 💻
```


### INSTRUÇÕES DE USO 🛠️
Ao rodar o codigo aparecem no terminal do usuário as seguintes opções:
```
1-Adicionar nova tarefa
2-Vizualizar tarefas
3-Atualizar status
4-Excluir tarefa
5-Sair
```
Cada tarefa precisa de um *titulo*, uma *descrição* e um *status* para ser adicionada. 
Na parte de vizualizar as tarefas, são mostradas todas as tarefas que já foram adicionadas.
```
Lista de tarefas:

Titulo: Estudar
Descrição: Cálculo
Status: A fazer
```
Tanto para atualizar como para deletar uma tarefa é necessario inserir o título da tarefa a ser modificada.
Ao terminar de usar a aplicação o usuário pode finalizar inserindo o valor ```5```.


### TESTES 🧪

Os teste foram feitos para as seguintes classes: 
  - addTask (Adicionar uma nova tarefa).
  - showTasks (Mostrar as tarefas).
  - updateTaskStatus (Atualizar o status de uma tarefa).
  - deleteTask (Apagar uma tarefa).

#### ADDTASK
O teste da função verifica se o retorno, caso seja feita uma inserção seja ```TRUE```.
```
describe('Adicionar TASK', () => {

    it('Retorna true', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        let result = addTask(task.title, task.description, task.status);

        expect(result).to.be.true;
    });

});
```

#### SHOWTASKS
O teste da função verifica se o retorno é ```TRUE```.
```
describe('Mostrar tarefas', () => {

    it('Deve mostrar a lista de tarefas no console', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        addTask(task.title, task.description, task.status);

        expect(showTasks(task)).to.be.true;
    });

});
```

#### UPDATETASKSTATUS
O teste da função verifica se o retorno, caso a atualização seja bem sucedida, ou```TRUE```.
```
describe('Atualizar status TASK', () => {

    it('Updated', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        addTask(task.title, task.description, task.status);


        expect(updateTaskStatus("Estudar", "Concluída")).to.be.true;
    });

});
```

#### UPDATETASKSTATUS
O teste da função verifica se o retorno, caso a remoção seja bem sucedida, ou```TRUE```.
```
describe('Deletar TASK', () => {

    it('Deleted', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        addTask(task.title, task.description, task.status);


        expect(deleteTask("Estudar")).to.be.true;
    });

});
```

## LINK VIDEO COM TESTES

