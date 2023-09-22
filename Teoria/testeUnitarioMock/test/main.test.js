const { expect } = require('chai');
const { Attendance } = require('../src/main.js');
const { chooseRoom } = require('../src/main.js');
const { chooseAttendandeDay } = require('../src/main.js');
const { showPeriodTime } = require('../src/main.js');

describe('Verificar prédio da sala', () => {

    it('SUCESSO - Retorna prédio 1', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "2", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("1");
    });

    it('SUCESSO - Retorna prédio 2', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "7", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("2");
    });

    it('SUCESSO - Retorna prédio 3', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "12", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("3");
    });

    it('SUCESSO - Retorna prédio 4', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "16", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("4");
    });

    it('SUCESSO - Retorna prédio 6', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "21", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("6");
    });

    it('SUCESSO - Retorna NaN', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "30", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("NaN");
    });

    it('FALHA - Retorna NaN caso a entrada seja INT', () => {

        expect(chooseRoom(2)).to.equal("NaN");
    });

    it('FALHA - Retorna NaN caso a entrada seja FLOAT', () => {

        expect(chooseRoom(14.2)).to.equal("NaN");
    });

    it('FALHA - Retorna NaN caso a sala passada seja null', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", null, ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("NaN");
    });

    it('FALHA - Retorna NaN caso a sala passada seja um texto', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseRoom(json)).to.equal("NaN");
    });

});

describe('Verificar dia de atendimento', () => {

    it('SUCESSO - Retorna true se tiver atendimento', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "2", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseAttendandeDay(json, "Segunda-Feira")).to.be.true;
    });

    it('SUCESSO - Retorna false se não tiver atendimento', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "2", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseAttendandeDay(json, "Terça-Feira")).to.be.false;
    });

    it('FALHA - Retorna false se não for uma string', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "2", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseAttendandeDay(json, 5)).to.be.false;
    });


    it('FALHA - Retorna false se for null', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "2", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(chooseAttendandeDay(json, null)).to.be.false;
    });


});

describe('Verificar horario por período', () => {

    it('SUCESSO - Retorna os horarios do periodo integral', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Integral", "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(showPeriodTime(json)).to.equal("08:00 - 23:00");
    });

    it('SUCESSO - Retorna os horarios do periodo noturno', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Noturno", "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(showPeriodTime(json)).to.equal("17:30 - 23:00");
    });

    it('FALHA - Retorna NaN para uma entrada int', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "1", "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(showPeriodTime(json)).to.equal("NaN");
    });

    it('FALHA -  Retorna NaN para uma entrada float', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "9.16", "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(showPeriodTime(json)).to.equal("NaN");
    });

    it('FALHA -  Retorna NaN para uma entrada null', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], null, "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(showPeriodTime(json)).to.equal("NaN");
    });

    it('FALHA - Retorna NaN para entrada de periodo matutino', () => {
        let building = new Attendance("Chris", ["Segunda-Feira", "Quinta-Feira"], "Matutino", "SALA 15", ["1", "2", "3", "4", "6"]);
        let json = building.toJson();

        expect(showPeriodTime(json)).to.equal("NaN");
    });

});
