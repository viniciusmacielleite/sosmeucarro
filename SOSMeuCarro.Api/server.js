'use strict';

const app = require('../SOSMeuCarro.Api/bin/express');
const variables = require('../SOSMeuCarro.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.log(`Servidor Api SOS Meu Carro iniciado na porta ${variables.Api.port}.`);
});

