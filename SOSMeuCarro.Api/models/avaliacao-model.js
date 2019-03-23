'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const avaliacaoModel = new schema({
    titulo:{ trim: true, index: true, required: true, type: String },
    nota:{ type: Number, min: 0, max: 5, required: true },
    ativa:{ type: Boolean, required: true },
    dataCriacao:{ type: Date, default: Date.now}
}, { collection: 'avaliacoes', versionKey: false });  //nome da coleção é configurado aqui

avaliacaoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Avaliacao', avaliacaoModel);