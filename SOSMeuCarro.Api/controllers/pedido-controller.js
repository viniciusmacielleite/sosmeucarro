'use strict'

function pedidoController() {

}

pedidoController.prototype.post = async (req, res) => { };

pedidoController.prototype.put = async (req, res) => { };

pedidoController.prototype.get = async (req, res) => {
    res.status(200).send('Listando os pedidos...');
};

pedidoController.prototype.getById = async (req, res) => {
    res.status(200).send(`O id passado foi ${req.params.id}`);
};

pedidoController.prototype.delete = async (req, res) => { };

module.exports = pedidoController;