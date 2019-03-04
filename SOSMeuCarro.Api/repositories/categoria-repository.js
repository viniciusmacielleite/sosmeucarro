'use strict';
require('../models/categoria-model');
const mongoose = require('mongoose');

//bloco para remover avisos de DeprecationWarning
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

const categoriaModel = mongoose.model('Categoria');

class categoriaRepository{
    constructor(){

    }

    async create(data){
        let categoria = new categoriaModel(data);
        return await categoria.save();
    }

    async update(id, data){
        await categoriaModel.findByIdAndUpdate(id, {$set: data});
        return await categoriaModel.findById(id);
    }

    async getAll(){
        return await categoriaModel.find();
    }

    async getById(id){
        return await categoriaModel.findById(id);
    }

    async delete(id){
        return await categoriaModel.findByIdAndRemove(id);
    }
}

module.exports = categoriaRepository;

