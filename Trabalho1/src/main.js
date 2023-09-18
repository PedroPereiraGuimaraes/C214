class Task {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

    showDetails() {
        console.log(`Titulo: ${this.title}`);
        console.log(`Descrição: ${this.description}`);
        console.log(`Status: ${this.status}`);
        console.log('');
    }

    updateStatus(status) {
        this.status = status;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [];

function showMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1-Adicionar nova tarefa');
    console.log('2-Vizualizar tarefas');
    console.log('3-Atualizar status');
    console.log('4-Excluir tarefa');
    console.log('5-Sair');
}

function addTask(title, description, status) {
    const task = new Task(title, description, status);
    tarefas.push(task);
    return tarefas.includes(task);
}

function showTasks() {
    console.log('Lista de tarefas:\n');
    tarefas.forEach((task, index) => {
        task.showDetails();
    });

    return tarefas.length > 0;
}


function updateTaskStatus(searchName) {
    const taskFound = tarefas.filter(task => task.title.toLowerCase().includes(searchName.toLowerCase()));
    if (taskFound.length > 0) {
        taskFound.forEach(task => {
            rl.question('Digite o status da tarefa: ', function (status) {
                task.updateStatus(status);
                getEntry();
            });
        });
        return true;
    } else {
        console.log('Nenhuma tarefa encontrada com esse título.\n');
        getEntry();
        return false;
    }
}

function deleteTask(searchName) {
    const taskFound = tarefas.filter(task => task.title.toLowerCase().includes(searchName.toLowerCase()));
    if (taskFound !== -1) {
        tarefas.splice(taskFound, 1);
        getEntry();
        return true;
    } else {
        getEntry();
        return false;
    }
}


function getEntry() {
    showMenu();
    rl.question('Digite sua opção: ', function (entrada) {
        switch (entrada) {
            case '1': //ADICIONAR UMA NOVA TAREFA
                rl.question('Digite o título da tarefa: ', function (title) {
                    rl.question('Digite a descrição da tarefa: ', function (description) {
                        rl.question('Digite o status da tarefa: ', function (status) {
                            addTask(title, description, status);
                            getEntry();
                        });
                    });
                });
                break;
            case '2': //VIZUALIZAR TAREFAS
                showTasks();
                getEntry();
                break;
            case '3': //ATUALIZAR STATUS
                rl.question('Digite o título da tarefa: ', function (searchName) {
                    updateTaskStatus(searchName);
                });
                break;
            case '4': //DELETAR TAREFA
                rl.question('Digite o título da tarefa: ', function (searchName) {
                    deleteTask(searchName);
                });
                break;
            case '5': //SAIR
                console.log('SAIR');
                rl.close();
                return;
            default: //ERRO
                console.log('Opção inválida. Por favor, escolha novamente.');
                getEntry();
        }
    });
}

getEntry();
module.exports.addTask = addTask;
module.exports.showTasks = showTasks;
module.exports.updateTaskStatus = updateTaskStatus;
module.exports.deleteTask = deleteTask;
module.exports.Task = Task;