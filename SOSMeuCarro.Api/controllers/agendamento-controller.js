'use strict';

require('../models/agendamento-model');

const repository = require('../repositories/agendamento-repository');
const _repo = new repository();

function agendamentoController() {

}

agendamentoController.prototype.post = async (req, res) => {
    let resultado = await _repo.create(req.body);
    res.status(201).send(resultado);
};

agendamentoController.prototype.put = async (req, res) => {
    let resultado = await _repo.update(req.params.id, req.body);
    res.status(202).send(resultado);
};

agendamentoController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};

agendamentoController.prototype.getById = async (req, res) => {
    let agendamento = await _repo.getById(req.params.id);
    res.status(200).send(agendamento);
};

agendamentoController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = agendamentoController;