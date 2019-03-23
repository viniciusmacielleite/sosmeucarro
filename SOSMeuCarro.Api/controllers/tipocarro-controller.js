'use strict';

require('../models/tipocarro-model');

const repository = require('../repositories/tipocarro-repository');
const _repo = new repository();

function tipocarroController() {

}

tipocarroController.prototype.post = async (req, res) => {
    let resultado = await _repo.create(req.body);
    res.status(201).send(resultado);
};

tipocarroController.prototype.put = async (req, res) => {
    let resultado = await _repo.update(req.params.id, req.body);
    res.status(202).send(resultado);
};

tipocarroController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};

tipocarroController.prototype.getById = async (req, res) => {
    let tipocarro = await _repo.getById(req.params.id);
    res.status(200).send(tipocarro);
};

tipocarroController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = tipocarroController;