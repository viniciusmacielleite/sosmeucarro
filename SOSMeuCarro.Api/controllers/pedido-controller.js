'use strict';

require('../models/pedido-model');

const repository = require('../repositories/pedido-repository');
const _repo = new repository();

function pedidoController() {

}

pedidoController.prototype.post = async (req, res) => {
    let resultado = await _repo.create(req.body);
    res.status(201).send(resultado);
};

pedidoController.prototype.put = async (req, res) => {
    let resultado = await _repo.update(req.params.id, req.body);
    res.status(202).send(resultado);
};

pedidoController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};

pedidoController.prototype.getById = async (req, res) => {
    let pedido = await _repo.getById(req.params.id);
    res.status(200).send(pedido);
};

pedidoController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = pedidoController;