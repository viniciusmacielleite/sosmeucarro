'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const agendamentoModel = new schema({
    titulo:{ trim: true, index: true, required: true, type: String },
    descricao:{ type: String },
    ativa:{ type: Boolean, required: true },
    dataCriacao:{ type: Date, default: Date.now}
}, { collection: 'agendamentos', versionKey: false });  //nome da coleção é configurado aqui

agendamentoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Agendamento', agendamentoModel);