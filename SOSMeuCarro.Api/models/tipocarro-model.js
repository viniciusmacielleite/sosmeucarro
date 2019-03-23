'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tipocarroModel = new schema({
    titulo:{ trim: true, index: true, required: true, type: String },
    descricao:{ type: String },
    ativa:{ type: Boolean, required: true },
    dataCriacao:{ type: Date, default: Date.now}
}, { collection: 'tipocarros', versionKey: false });  //nome da coleção é configurado aqui

tipocarroModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('TipoCarro', tipocarroModel);