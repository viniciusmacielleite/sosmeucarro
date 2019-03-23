'use strict';

require('../models/avaliacao-model');

const repository = require('../repositories/avaliacao-repository');
const _repo = new repository();

function avaliacaoController() {

}

avaliacaoController.prototype.post = async (req, res) => {
    let resultado = await _repo.create(req.body);
    res.status(201).send(resultado);
};

avaliacaoController.prototype.put = async (req, res) => {
    let resultado = await _repo.update(req.params.id, req.body);
    res.status(202).send(resultado);
};

avaliacaoController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};

avaliacaoController.prototype.getById = async (req, res) => {
    let avaliacao = await _repo.getById(req.params.id);
    res.status(200).send(avaliacao);
};

avaliacaoController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = avaliacaoController;