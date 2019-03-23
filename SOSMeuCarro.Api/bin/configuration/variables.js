const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://admin:089235vini$@cluster0-ienac.mongodb.net/test?retryWrites=true'
    },
    Security: {
        secretKey: 'aad019bcc53c8bd5b2d0b380eced4b51|99a2c1cc5155790c043525b2cf09a94b'
    }
};
module.exports = variables;