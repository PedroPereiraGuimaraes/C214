const { expect } = require('chai');
const { Task } = require('../src/main.js');
const { addTask } = require('../src/main.js');
const { showTasks } = require('../src/main.js');
const { updateTaskStatus } = require('../src/main.js');
const { deleteTask } = require('../src/main.js');

describe('Adicionar TASK', () => {

    it('Retorna true', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        let result = addTask(task.title, task.description, task.status);

        expect(result).to.be.true;
    });

});


describe('Mostrar tarefas', () => {

    it('Deve mostrar a lista de tarefas no console', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        addTask(task.title, task.description, task.status);

        expect(showTasks(task)).to.be.true;
    });

});


describe('Atualizar status TASK', () => {

    it('Updated', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        addTask(task.title, task.description, task.status);


        expect(updateTaskStatus("Estudar", "Concluída")).to.be.true;
    });

});

describe('Deletar TASK', () => {

    it('Deleted', () => {
        let task = new Task("Estudar", "Revisar a matéria de matemática", "A fazer");
        addTask(task.title, task.description, task.status);


        expect(deleteTask("Estudar")).to.be.true;
    });

});
